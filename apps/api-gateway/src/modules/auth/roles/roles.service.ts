import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

//entities
import { Permission } from '../permissions/entities/permission.entity';
import { Role } from './entities/role.entity';


//dto
import { CreateRoleDto } from '@lib/contracts/auth/roles/create-role.dto';
import { User } from '../users/entities/user.entity';
import { UpdateRoleDto } from '@lib/contracts/auth/roles/update-role.dto';
// import { UpdateRoleDto } from './dto/update-role.dto';


@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
        @InjectRepository(Permission) private readonly permissionRepo: Repository<Permission>
    ){}

    async create(dto: CreateRoleDto): Promise<Role> {
        const permissions = dto.permissionIds?.length
          ? await this.permissionRepo.findBy({ permission_id: In(dto.permissionIds) })
          : [];
      
        const role = this.roleRepo.create({
          name: dto.name,
          alias: dto.alias,
          description: dto.description,
          permissions,
        });
      
        return this.roleRepo.save(role);
    }
      

    findAll(): Promise<Role[]>{
        return this.roleRepo.find({relations: ['permissions']})
    }

    async findOne(roleId:number):Promise<Role>{
        const role = await this.roleRepo.findOne({ where: { role_id :roleId } });

        if (!role) {
            throw new NotFoundException('Role not found');
        }
        return role;
    }


    async update(roleId:number, dto: UpdateRoleDto): Promise<Role>{
        const role = await this.roleRepo.findOne({ where: { role_id :roleId } });

        if (!role) {
            throw new NotFoundException('Role not found');
          }
        
        Object.assign(role, dto);
        return this.roleRepo.save(role);
    }

    async delete(roleId: number): Promise<{ message: string }> {
        const role = await this.roleRepo.findOne({ where: { role_id: roleId } });
      
        if (!role) {
          throw new NotFoundException(`Role with ID ${roleId} not found`);
        }
      
        await this.roleRepo.remove(role);
      
        return { message: `Role with ID ${roleId} has been deleted successfully` };
    }
      


}
