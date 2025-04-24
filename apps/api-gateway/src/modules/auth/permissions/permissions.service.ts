import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//entity
import { Permission } from './entities/permission.entity';

//dto
import { CreatePermissionDto, UpdatePermissionDto } from '@lib/contracts';


@Injectable()
export class PermissionsService {
  constructor(
      @InjectRepository (Permission) private permissionRepo: Repository<Permission>
  ){}

  create(dto: CreatePermissionDto): Promise<Permission> {
      const permission = this.permissionRepo.create(dto);
      return this.permissionRepo.save(permission);
    }
  
  findAll(): Promise<Permission[]> {
      return this.permissionRepo.find();
    }

  async findOne(permissionId:string): Promise<Permission>{
    const permission = await this.permissionRepo.findOne({ where: { permission_id :permissionId } });

    if (!permission) {
      throw new NotFoundException('Permission not found');
    }

    return permission;
  }

  async update(permissionId:string, dto: UpdatePermissionDto): Promise<Permission>{
    const permission = await this.permissionRepo.findOne({ where: { permission_id :permissionId } });

    if (!permission) {
        throw new NotFoundException('Permission not found');
      }
    
    Object.assign(permission, dto);
    return this.permissionRepo.save(permission);
  }

  async delete(permissionId: string): Promise<{ message: string }> {
    const permission = await this.permissionRepo.findOne({ where: { permission_id: permissionId } });
  
    if (!permission) {
      throw new NotFoundException(`Permission with ID ${permissionId} not found`);
    }
  
    await this.permissionRepo.remove(permission);
  
    return { message: `Permisson with ID ${permissionId} has been deleted successfully` };
  }

}
