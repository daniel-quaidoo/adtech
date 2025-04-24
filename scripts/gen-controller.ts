// scripts/generate-controller-dtos.ts

import { Project, SyntaxKind, ObjectLiteralExpression } from "ts-morph";
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs-extra";

const REL_DECORATORS = new Set([
  "ManyToOne",
  "OneToMany",
  "OneToOne",
  "ManyToMany",
]);

interface EntityMeta {
  filePath: string;
  moduleName: string;
  subName: string;
  fileBase: string;
  className: string;
}

async function main() {
  const project = new Project({ tsConfigFilePath: "./tsconfig.json" });
  const entityFiles = glob.sync(
    "apps/api-gateway/src/modules/**/entities/*.entity.ts"
  );

  // Build index
  const index = new Map<string, EntityMeta>();
  for (const fp of entityFiles) {
    const parts = fp.split(path.sep);
    const mi = parts.indexOf("modules") + 1;
    const moduleName = parts[mi];
    const subName = parts[mi + 1];
    const fileBase = path.basename(fp, ".entity.ts");
    const src = project.addSourceFileAtPath(fp);
    const cls = src.getClasses().find((c) => c.getDecorator("Entity"));
    if (!cls) continue;
    index.set(cls.getName()!, {
      filePath: fp,
      moduleName,
      subName,
      fileBase,
      className: cls.getName()!,
    });
  }

  const done = new Set<string>();
  async function gen(meta: EntityMeta) {
    if (done.has(meta.filePath)) return;
    done.add(meta.filePath);

    const src = project.getSourceFile(meta.filePath)!;
    const cls = src.getClasses().find((c) => c.getDecorator("Entity"))!;

    // recurse related first
    for (const p of cls.getProperties()) {
      const dec = p
        .getDecorators()
        .find((d) => REL_DECORATORS.has(d.getName()));
      if (!dec) continue;
      const m = /=>\s*(\w+)/.exec(dec.getArguments()[0].getText());
      if (m && index.has(m[1])) await gen(index.get(m[1])!);
    }

    // prepare dto dir
    const dtoDir = path.join(
      "apps",
      "api-gateway",
      "src",
      "modules",
      meta.moduleName,
      meta.subName,
      "dto"
    );
    await fs.ensureDir(dtoDir);

    // gather field metadata
    type Field = {
      name: string;
      tsType: string;
      optional: boolean;
      isEnum: boolean;
      enumName?: string;
      isRelation: boolean;
      relMeta?: EntityMeta;
      relMany: boolean;
    };
    const fields: Field[] = cls.getProperties().map((p) => {
      const name = p.getName();
      let tsType = p.getType().getText();
      const decs = p.getDecorators();

      // Column nullable?
      const col = decs.find((d) => d.getName() === "Column");
      const optional = Boolean(
        col?.getArguments()[0]?.getText().includes("nullable: true")
      );

      // enum?
      let isEnum = false,
        enumName: string | undefined;
      if (
        col?.getArguments()[0]?.getKind() === SyntaxKind.ObjectLiteralExpression
      ) {
        const obj = col.getArguments()[0] as ObjectLiteralExpression;
        const e = obj.getProperty("enum") as any;
        const id = e?.getInitializerIfKind(SyntaxKind.Identifier);
        if (id) {
          isEnum = true;
          enumName = id.getText();
          tsType = enumName;
        }
      }
      // date?
      const opts = col?.getArguments()[0]?.getText() || "";
      if (opts.includes(`'date'`)) tsType = "Date";

      // relation?
      const relDec = decs.find((d) => REL_DECORATORS.has(d.getName()));
      let isRelation = false,
        relMeta: EntityMeta | undefined,
        relMany = false;
      if (relDec) {
        isRelation = true;
        relMany = ["OneToMany", "ManyToMany"].includes(relDec.getName());
        const m = /=>\s*(\w+)/.exec(relDec.getArguments()[0].getText());
        if (m) relMeta = index.get(m[1]);
      }

      return {
        name,
        tsType,
        optional,
        isEnum,
        enumName,
        isRelation,
        relMeta,
        relMany,
      };
    });

    // common base imports (class-transformer + swagger)
    const baseImports: string[] = [];
    if (fields.some((f) => f.tsType === "Date" || f.isRelation)) {
      baseImports.push(`import { Type } from 'class-transformer';`);
    }
    baseImports.push(`import { ApiProperty } from '@nestjs/swagger';`);

    // enums imports
    const enumImports = fields
      .filter((f) => f.isEnum && f.enumName)
      .map(
        (f) =>
          `import { ${f.enumName} } from '@lib/contracts/${meta.moduleName}/${meta.subName}/enums/${f.enumName!.toLowerCase()}.enum';`
      );

    // related DTO imports
    const dtoImports = Array.from(
      new Set(
        fields
          .filter((f) => f.isRelation && f.relMeta)
          .map((f) => {
            const rm = f.relMeta!;
            return `import { ${rm.className}Dto } from 'apps/api-gateway/src/modules/${rm.moduleName}/${rm.subName}/dto/${rm.fileBase}.dto';`;
          })
      )
    );

    // helpers for ApiProperty
    function mkApi(f: Field, forceRequired: boolean = true) {
      const opts: string[] = [];

      if (!forceRequired || f.optional) {
        opts.push(`required: false`);
      }
      opts.push(`description: '${f.name}'`);
      if (f.isEnum) opts.push(`enum: ${f.enumName}`);
      if (f.tsType === "Date") opts.push(`type: String, format: 'date'`);
      if (f.isRelation) opts.push(`type: [${f.relMeta!.className}Dto]`);
      return `  @ApiProperty({ ${opts.join(", ")} })`;
    };

    const C = meta.className;
    const CreateCls = `Create${C}Dto`;
    const UpdateCls = `Update${C}Dto`;
    const FullCls = `${C}Dto`;
    const base = meta.fileBase;

    // --- CREATE DTO ---
    // build valids based on create logic (relations optional + column optional)
    const createValids = new Set<string>();
    fields.forEach((f) => {
      if (f.isRelation) {
        createValids.add("IsArray");
        createValids.add("IsOptional");
      } else if (f.tsType.toLowerCase() === "string")
        createValids.add("IsString");
      else if (f.tsType.toLowerCase() === "number")
        createValids.add("IsNumber");
      else if (f.tsType === "Date") createValids.add("IsDate");
      if (f.isEnum) createValids.add("IsEnum");
      if (f.optional) createValids.add("IsOptional");
    });
    const createImports = [
      ...baseImports,
      createValids.size
        ? `import { ${[...createValids].sort().join(", ")} } from 'class-validator';`
        : "",
      "",
      ...(enumImports.length ? ["// enum", ...enumImports, ""] : []),
      ...(dtoImports.length ? ["// dto", ...dtoImports, ""] : []),
    ].filter(Boolean);

    const createLines = [...createImports, `export class ${CreateCls} {`];
    for (const f of fields) {
      if (f.name === `${base}_id`) continue;
      createLines.push(mkApi(f));
      if (f.isRelation) {
        createLines.push(
          `  @IsArray()`,
          `  @IsOptional()`,
          `  @Type(() => ${f.relMeta!.className}Dto)`
        );
      } else {
        const d = f.isEnum
          ? `IsEnum(${f.enumName})`
          : f.tsType === "Date"
            ? "IsDate()"
            : f.tsType.toLowerCase() === "number"
              ? "IsNumber()"
              : "IsString()";
        createLines.push(`  @${d}`);
        if (f.optional) createLines.push(`  @IsOptional()`);
        if (f.tsType === "Date") createLines.push(`  @Type(() => Date)`);
      }
      createLines.push(
        `  ${f.name}${f.optional ? "?" : ""}: ${
          f.isRelation ? `${f.relMeta!.className}Dto[]` : f.tsType
        };`,
        ""
      );
    }
    createLines.push("}");
    await fs.writeFile(
      path.join(dtoDir, `create-${base}.dto.ts`),
      createLines.join("\n")
    );

    // --- UPDATE DTO ---
    const updateValids = new Set<string>();
    fields.forEach((f) => {
      // everything optional
      if (f.isRelation) {
        updateValids.add("IsArray");
        updateValids.add("IsOptional");
      } else if (f.tsType.toLowerCase() === "string")
        updateValids.add("IsString");
      else if (f.tsType.toLowerCase() === "number")
        updateValids.add("IsNumber");
      else if (f.tsType === "Date") updateValids.add("IsDate");
      if (f.isEnum) updateValids.add("IsEnum");
      updateValids.add("IsOptional");
    });
    const updateImports = [
      ...baseImports,
      `import { ${[...updateValids].sort().join(", ")} } from 'class-validator';`,
      "",
      ...(enumImports.length ? ["// enum", ...enumImports, ""] : []),
      ...(dtoImports.length ? ["// dto", ...dtoImports, ""] : []),
    ];
    const updateLines = [...updateImports, `export class ${UpdateCls} {`];
    for (const f of fields) {
        updateLines.push(mkApi(f, false));
      if (f.isRelation) {
        updateLines.push(
          `  @IsArray()`,
          `  @IsOptional()`,
          `  @Type(() => ${f.relMeta!.className}Dto)`
        );
      } else {
        const d = f.isEnum
          ? `IsEnum(${f.enumName})`
          : f.tsType === "Date"
            ? "IsDate()"
            : f.tsType.toLowerCase() === "number"
              ? "IsNumber()"
              : "IsString()";
        updateLines.push(`  @${d}`, `  @IsOptional()`);
        if (f.tsType === "Date") updateLines.push(`  @Type(() => Date)`);
      }
      updateLines.push(
        `  ${f.name}?: ${
          f.isRelation ? `${f.relMeta!.className}Dto[]` : f.tsType
        };`,
        ""
      );
    }
    updateLines.push("}");
    await fs.writeFile(
      path.join(dtoDir, `update-${base}.dto.ts`),
      updateLines.join("\n")
    );

    // --- FULL DTO ---
    const fullValids = new Set<string>();
    fields.forEach((f) => {
      if (f.isRelation) fullValids.add("IsArray");
      else if (f.tsType.toLowerCase() === "string") fullValids.add("IsString");
      else if (f.tsType.toLowerCase() === "number") fullValids.add("IsNumber");
      else if (f.tsType === "Date") fullValids.add("IsDate");
      if (f.isEnum) fullValids.add("IsEnum");
      // no IsOptional here
    });
    const fullImports = [
      ...baseImports,
      `import { ${[...fullValids].sort().join(", ")} } from 'class-validator';`,
      "",
      ...(enumImports.length ? ["// enum", ...enumImports, ""] : []),
      ...(dtoImports.length ? ["// dto", ...dtoImports, ""] : []),
    ];
    const dtoLines = [...fullImports, `export class ${FullCls} {`];
    for (const f of fields) {
      dtoLines.push(mkApi(f));
      if (f.isRelation) {
        dtoLines.push(
          `  @IsArray()`,
          `  @Type(() => ${f.relMeta!.className}Dto)`
        );
      } else {
        const d = f.isEnum
          ? `IsEnum(${f.enumName})`
          : f.tsType === "Date"
            ? "IsDate()"
            : f.tsType.toLowerCase() === "number"
              ? "IsNumber()"
              : "IsString()";
        dtoLines.push(`  @${d}`);
        if (f.tsType === "Date") dtoLines.push(`  @Type(() => Date)`);
      }
      dtoLines.push(
        `  ${f.name}: ${
          f.isRelation ? `${f.relMeta!.className}Dto[]` : f.tsType
        };`,
        ""
      );
    }
    dtoLines.push("}");
    await fs.writeFile(
      path.join(dtoDir, `${base}.dto.ts`),
      dtoLines.join("\n")
    );
  }

  // run
  for (const meta of index.values()) {
    await gen(meta);
  }
  console.log("✅ Controller DTOs generated with correct optional usage.");
}

main().catch(console.error);
