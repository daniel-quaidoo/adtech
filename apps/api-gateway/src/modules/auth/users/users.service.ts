import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';
import { RolesService } from '../roles/roles.service';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';
import { UpdateUserDto } from '@lib/contracts/auth/users/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
    ){}

    async create(dto: CreateUserDto): Promise<User> {
        let roles = [];
      
        if (dto.roles && Array.isArray(dto.roles) && dto.roles.length) {
          roles = await this.roleRepo.findBy({
            role_id: In(dto.roles),
          });
        }
      
        const user = this.userRepo.create({
          ...dto,
          roles,
        });
      
        return this.userRepo.save(user);
    }
      

    findAll(): Promise<User[]>{
        return this.userRepo.find({relations: ['roles', 'roles.permissions']});
    }

    async findOne(userId:string): Promise<User>{
        const user = await this.userRepo.findOne({where:{user_id:userId}});

        if (!user) throw new NotFoundException("User not found")
        
        return user
    }

    async updateUser(userId:string, dto: UpdateUserDto): Promise<User>{
        const user = await this.userRepo.findOne({where: {user_id: userId}})

        if (!user) throw new NotFoundException("User not found")
        
        Object.assign(user,dto);
        return this.userRepo.save(user);
    }
    
    async assignRoleToUser( userId: string, roleIds: number[]): Promise <User>{
        const user =await this.userRepo.findOne({
            where:{user_id: userId},
            relations: ['roles']
        });
        if (!user) throw new NotFoundException("User not found")
        
        const rolesToAdd = await this.roleRepo.findBy({
            role_id: In(roleIds),
        });
        
        const existingRoleIds = user.roles.map(r=> r.role_id)
        const newRoleIds = rolesToAdd.filter(r=> !existingRoleIds.includes(r.role_id))

        user.roles.push(...newRoleIds);
        return this.userRepo.save(user);
    }

    async removeRoleFromUser(userId: string, roleId: number):Promise<User>{
        const user =await this.userRepo.findOne({
            where:{user_id: userId},
            relations: ['roles']
        });

        if (!user) throw new NotFoundException("User not found")

        user.roles = user.roles.filter(r => r.role_id !== roleId);
        return this.userRepo.save(user);

    }

}
