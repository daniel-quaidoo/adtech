import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';
import * as glob from 'glob';
import * as path from 'path';
import * as fs from 'fs-extra';

// Relation decorators to detect
const REL_DECORATORS = new Set([
  'ManyToOne', 'OneToMany', 'OneToOne', 'ManyToMany'
]);

// Metadata for each entity
interface EntityMeta {
  filePath: string;
  moduleName: string;
  subName: string;
  fileBase: string;   // e.g. "group" or "user-group"
  className: string;  // e.g. "Group" or "UserGroup"
}

async function main() {
  const project = new Project({ tsConfigFilePath: './tsconfig.json' });
  const entityFiles = glob.sync('apps/api-gateway/src/modules/**/entities/*.entity.ts');

  // Index entities by class name
  const entityIndex = new Map<string, EntityMeta>();
  for (const filePath of entityFiles) {
    const parts      = filePath.split(path.sep);
    const idx        = parts.indexOf('modules') + 1;
    const moduleName = parts[idx];
    const subName    = parts[idx + 1];
    const fileBase   = path.basename(filePath, '.entity.ts');
    const src        = project.addSourceFileAtPath(filePath);
    const cls        = src.getClasses().find(c => c.getDecorator('Entity'));
    if (!cls) continue;
    const className  = cls.getName()!;
    entityIndex.set(className, { filePath, moduleName, subName, fileBase, className });
  }

  const processed = new Set<string>();

  // Helper: PascalCase from kebab or snake
  const toPascal = (str: string) =>
    str.split(/[-_]/).map(s => s[0].toUpperCase() + s.slice(1)).join('');

  async function genEntity(meta: EntityMeta) {
    if (processed.has(meta.filePath)) return;
    processed.add(meta.filePath);

    const { filePath, moduleName, subName, fileBase, className } = meta;
    const targetDir = path.join('libs/contracts/src', moduleName, subName);
    await fs.ensureDir(targetDir);

    const src = project.getSourceFile(filePath) || project.addSourceFileAtPath(filePath);
    const cls = src.getClasses().find(c => c.getDecorator('Entity'));
    if (!cls) return;

    type Field = {
      name: string;
      tsType: string;
      optional: boolean;
      isPK: boolean;
      isRelation: boolean;
      relType: 'one'|'many'|null;
      targetEntity?: string;
      isEnum: boolean;
      enumName?: string;
    };

    // Extract fields
    const fields: Field[] = cls.getProperties().map(prop => {
      const name   = prop.getName();
      const decs   = prop.getDecorators();
      const isPK   = decs.some(d => d.getName() === 'PrimaryGeneratedColumn');
      let tsType   = prop.getType().getText();
      let optional = false;
      let isEnum   = false;
      let enumName: string | undefined;

      // Column decorator
      const col = decs.find(d => d.getName() === 'Column');
      if (col) {
        const arg = col.getArguments()[0];
        if (arg?.getKind() === SyntaxKind.ObjectLiteralExpression) {
          const obj = arg as ObjectLiteralExpression;
          if (obj.getProperty('nullable')?.getText().includes('true')) optional = true;
          const eProp = obj.getProperty('enum');
          if (eProp?.getKind() === SyntaxKind.PropertyAssignment) {
            const init = (eProp as any).getInitializerIfKind(SyntaxKind.Identifier);
            if (init) {
              isEnum   = true;
              enumName = init.getText();  // e.g. "Gender"
              tsType   = enumName;
            }
          }
          const t = obj.getProperty('type')?.getText() || '';
          if (t.includes("'date'")) tsType = 'string';
          if (t.includes('timestamptz')) { tsType = 'Date'; optional = true; }
        }
      }

      // Relation decorator
      const relDec = decs.find(d => REL_DECORATORS.has(d.getName()));
      const isRelation = !!relDec;
      let relType: 'one'|'many'|null = null;
      let targetEntity: string | undefined;
      if (relDec) {
        relType = ['OneToMany','ManyToMany'].includes(relDec.getName()) ? 'many' : 'one';
        const txt = relDec.getArguments()[0]?.getText() || '';
        const m = /=>\s*([\w]+)/.exec(txt);
        targetEntity = m?.[1];
      }

      return { name, tsType, optional, isPK, isRelation, relType, targetEntity, isEnum, enumName };
    });

    // Stub any missing enums:
    for (const f of fields) {
      if (f.isEnum && f.enumName) {
        const enumDir  = path.join(targetDir, 'enums');
        const fileName = `${f.enumName.toLowerCase()}.enum.ts`;
        const fullPath = path.join(enumDir, fileName);

        await fs.ensureDir(enumDir);
        if (!await fs.pathExists(fullPath)) {
          const stub = `export enum ${f.enumName} {\n` +
                      `  // TODO: add members, e.g. OPTION_A = 'OPTION_A',\n` +
                      `}\n`;
          await fs.writeFile(fullPath, stub, 'utf8');
        }
      }
    }

    // Recurse into related entities first
    for (const f of fields) {
      if (f.isRelation && f.targetEntity) {
        const related = entityIndex.get(f.targetEntity);
        if (related) await genEntity(related);
      }
    }

    // Build import lines
    const imports = new Set<string>();
    // Enums
    fields.forEach(f => {
      if (f.isEnum && f.enumName) {
        imports.add(
          `import { ${f.enumName} } from '@lib/contracts/${moduleName}/${subName}/enums/${f.enumName.toLowerCase()}.enum';`
        );
      }
    });
    // Relations → CreateXxxDto imports
    fields.forEach(f => {
      if (f.isRelation && f.targetEntity) {
        const relMeta = entityIndex.get(f.targetEntity!);
        if (!relMeta) return;
        const relBase = relMeta.fileBase;      // e.g. 'role' or 'user-group'
        const relCls  = toPascal(relBase);     // e.g. 'Role' or 'UserGroup'
        imports.add(
          `import { Create${relCls}Dto } from '@lib/contracts/${relMeta.moduleName}/${relMeta.subName}/create-${relBase}.dto';`
        );
      }
    });

    // DTO class names
    const CreateCls = `Create${className}Dto`;
    const UpdateCls = `Update${className}Dto`;
    const FullCls   = `${className}Dto`;
    const PatName   = `${className.toUpperCase()}_PATTERNS`;

    // 1) Create DTO
    const createLines = [ ...imports, '', `export class ${CreateCls} {` ];
    fields.forEach(f => {
      if (f.isPK) return;  // skip primary key
      if (f.isRelation && f.targetEntity) {
        const relMeta = entityIndex.get(f.targetEntity!);
        const relCls  = toPascal(relMeta.fileBase);
        const typeStr = f.relType==='many'
          ? `Create${relCls}Dto[]`
          : `Create${relCls}Dto`;
        const opt = f.optional ? '?' : '';
        createLines.push(`  ${f.name}${opt}: ${typeStr};`);
      } else {
        const opt = f.optional ? '?' : '';
        createLines.push(`  ${f.name}${opt}: ${f.tsType};`);
      }
    });
    createLines.push('}');
    await fs.writeFile(path.join(targetDir, `create-${fileBase}.dto.ts`), createLines.join('\n'));

    // 2) Update DTO (all optional)
    const updateLines = [ ...imports, '', `export class ${UpdateCls} {` ];
    fields.forEach(f => {
      const optKey = '?';
      if (f.isRelation && f.targetEntity) {
        const relMeta = entityIndex.get(f.targetEntity!);
        const relCls  = toPascal(relMeta.fileBase);
        const typeStr = f.relType==='many'
          ? `Create${relCls}Dto[]`
          : `Create${relCls}Dto`;
        updateLines.push(`  ${f.name}${optKey}: ${typeStr};`);
      } else {
        updateLines.push(`  ${f.name}${optKey}: ${f.tsType};`);
      }
    });
    updateLines.push('}');
    await fs.writeFile(path.join(targetDir, `update-${fileBase}.dto.ts`), updateLines.join('\n'));

    // 3) Full DTO
    const dtoLines = [ ...imports, '', `export class ${FullCls} {` ];
    fields.forEach(f => {
      if (f.isRelation && f.targetEntity) {
        const relMeta = entityIndex.get(f.targetEntity!);
        const relCls  = toPascal(relMeta.fileBase);
        const typeStr = f.relType==='many'
          ? `Create${relCls}Dto[]`
          : `Create${relCls}Dto`;
        dtoLines.push(`  ${f.name}: ${typeStr};`);
      } else {
        dtoLines.push(`  ${f.name}: ${f.tsType};`);
      }
    });
    dtoLines.push('}');
    await fs.writeFile(path.join(targetDir, `${fileBase}.dto.ts`), dtoLines.join('\n'));

    // 4) Pattern file
    const patLines = [
      `export const ${PatName} = {`,
      `  FIND_ALL: '${fileBase}.findAll',`,
      `  FIND_ONE: '${fileBase}.findOne',`,
      `  CREATE: '${fileBase}.create',`,
      `  UPDATE: '${fileBase}.update',`,
      `  DELETE: '${fileBase}.remove'`,
      `};`
    ];
    await fs.writeFile(path.join(targetDir, `${fileBase}.pattern.ts`), patLines.join('\n'));
  }

  // Generate all entities
  for (const meta of entityIndex.values()) {
    await genEntity(meta);
  }

  // Root index.ts
  const idxLines: string[] = [];
  entityIndex.forEach(meta => {
    const { moduleName, subName, fileBase, className } = meta;
    idxLines.push(`// ${className}`);
    idxLines.push(`export * from '@lib/contracts/${moduleName}/${subName}/${fileBase}.dto';`);
    idxLines.push(`export * from '@lib/contracts/${moduleName}/${subName}/create-${fileBase}.dto';`);
    idxLines.push(`export * from '@lib/contracts/${moduleName}/${subName}/update-${fileBase}.dto';`);
    idxLines.push(`export * from '@lib/contracts/${moduleName}/${subName}/${fileBase}.pattern';`);
    idxLines.push('');
  });
  await fs.writeFile('libs/contracts/src/index.ts', idxLines.join('\n'));

  console.log('✅ All DTOs and index.ts generated');
}

main().catch(console.error);
