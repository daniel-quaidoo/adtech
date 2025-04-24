import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";

// dto
import { CreateUserGroupDto } from "@lib/contracts/auth/groups/create-user-group.dto";
// import { CreateGroupDto } from "@lib/contracts";

// entity
import { Group } from "./entities/group.entity";
import { User } from "../users/entities/user.entity";
import { UserGroup } from "./entities/user-group.entity";
import { Permission } from "../permissions/entities/permission.entity";
import { CreateGroupDto, CreateUserGroupPermissionDto } from "@lib/contracts";


@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepo: Repository<Group>,
    @InjectRepository(UserGroup)
    private readonly userGroupRepo: Repository<UserGroup>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Permission)
    private readonly permissionRepo: Repository<Permission>
  ) {}

  //Group Endpoints
  async create(dto: CreateGroupDto): Promise<Group> {

    const permissionIds = dto.permissions?.map(p=> p.permission_id) || [];

    const permissions = permissionIds.length
      ? await this.permissionRepo.findByIds(permissionIds)
      : [];

    if (permissionIds.length && permissions.length !== permissionIds.length) {
        throw new NotFoundException('One or more permissions not found');
    }
  
    const group = this.groupRepo.create({
      name: dto.name,
      description: dto.description,
      permissions,
    });
    const savedGroup = await this.groupRepo.save(group);
  
    const userIds = dto.userGroups?.map(ug => ug.user?.user_id) || [];

    if (userIds?.length) {
      const users = await this.userRepo.findByIds(userIds);

      if (users.length !== userIds.length) {
        throw new NotFoundException('One or more users not found');
      }

      const userGroups = users.map(user =>
        this.userGroupRepo.create({ user, group: savedGroup }) 
      );
  
      await this.userGroupRepo.save(userGroups);
    }
  
    return this.groupRepo.findOne({
      where: { group_id: savedGroup.group_id },
      relations: ['permissions', 'userGroups', 'userGroups.user'],
    });
  }
  
  findAll():Promise<Group[]>{
    return this.groupRepo.find()
  }

  //Find a group
  async findOne(groupId: string): Promise<Group> {
    const group = await this.groupRepo.findOne({
      where: { group_id: groupId },
    });
    if (!group) throw new NotFoundException("Group not found");
    return group;
  }

  //Delete a group
  async remove(groupId: string): Promise<void> {
    const group = await this.findOne(groupId);
    await this.groupRepo.remove(group);
  }

  //UserGroup Endpoints

  //Add user to group

  async addUserToGroup(dto: CreateUserGroupDto): Promise <UserGroup> {

    // const { user, group } = dto;
    
    const group = await this.groupRepo.findOneBy({group_id: dto.group.group_id});
    const user = await this.userRepo.findOneBy({user_id: dto.user.user_id})

    if (!group || !user) throw new NotFoundException("Group or User not found");

    const existing_group = await this.userGroupRepo.findOne({
      where: {user: {user_id: dto.user.user_id}, group: {group_id: dto.group.group_id}},
      relations: ['user', 'group'],
    });

    if (existing_group) throw new ConflictException("User already in this group");

    const userGroup = this.userGroupRepo.create({ group, user });

    return this.userGroupRepo.save(userGroup)
  }

  //Get all users in a usergroup
  async getUsersInGroup(groupId: string): Promise <User[]> {
    const group = await this.groupRepo.findOne({
      where: {group_id: groupId},
      relations: ['userGroups', 'userGroups.user'],
    });

    if (!group) throw new NotFoundException("Group not found")
    return group.userGroups.map((ug) => ug.user)
  }


  async removeUserFromGroup(user_id: string, group_id: string): Promise<void> {
    const user = await this.userRepo.findOneBy({ user_id });
    const group = await this.groupRepo.findOneBy({ group_id });
  
    if (!user || !group) {
      throw new NotFoundException('User or Group not found');
    }
  
    const userGroup = await this.userGroupRepo.findOne({
      where: {
        user: { user_id },
        group: { group_id },
      },
      relations: ['user', 'group'],
    });
  
    if (!userGroup) {
      throw new NotFoundException('User is not part of this group');
    }
  
    await this.userGroupRepo.remove(userGroup);
  }
  

  //Permission Endpoints

  //Add permission to group
  async addPermissionToGroup(dto: CreateUserGroupPermissionDto): Promise<Group> {
    const group = await this.groupRepo.findOne({
      where: { group_id: dto.group?.group_id },
      relations: ['permissions'],
    });
  
    if (!group) {
      throw new NotFoundException('Group not found');
    }

    const permissionId = dto.permission?.permission_id;
  
    if (!permissionId) {
      throw new BadRequestException('permission ID not provided');
    }

    const permission = await this.permissionRepo.findOne({
      where: { permission_id: permissionId },
    });
  
    if (!permission) {
      throw new NotFoundException('Permission not found');
    }

    const existingPermissionIds = group.permissions.map(p => p.permission_id);
    const isAlreadyAssigned = existingPermissionIds.includes(permissionId);
  
    if (isAlreadyAssigned) {
      throw new ConflictException('Permission already assigned to group');
    }
  
    group.permissions.push(permission);
    return this.groupRepo.save(group);
  }
   
  //Get all permissions in a group
  async getPermissionsInGroup(group_id:string): Promise<Permission[]>{
    const group = await this.groupRepo.findOne({
      where: {group_id: group_id},
      relations: ['permissions'],
    })
    if (!group) throw new NotFoundException("Group not found")
    return group.permissions;
  }

  // Delete permission from group

  async removePermissionFromGroup(groupId: string, permissionId: string): Promise<void> {
    const group = await this.groupRepo.findOne({
      where: { group_id: groupId },
      relations: ['permissions'],
    });
  
    if (!group) throw new NotFoundException('Group not found');
  
    const exists = group.permissions.some((perm) => {
      const permId = String(perm.permission_id).trim();
      const incomingId = String(permissionId).trim();

      return permId === incomingId;
    });
  
    if (!exists) throw new NotFoundException('Permission not assigned to group');
  
    group.permissions = group.permissions.filter((perm) => {
      const permId = String(perm.permission_id).trim();
      const incomingId = String(permissionId).trim();
      return permId !== incomingId;
    });
  
    await this.groupRepo.save(group);
  }
  

}
