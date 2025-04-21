import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";

// dto
import { GroupDto } from "@lib/contracts/auth/groups/group.dto";
import { CreateGroupDto } from "@lib/contracts/auth/groups/create-group.dto";
import { CreateUserGroupDto } from "@lib/contracts/auth/groups/create-user-group.dto";

// entity
import { Group } from "./entities/group.entity";
import { User } from "../users/entities/user.entity";
import { UserGroup } from "./entities/user-group.entity";
import { Permission } from "../permissions/entities/permission.entity";
import { CreateUserGroupPermissionDto } from "@lib/contracts/auth/groups/create-user-group-permission.dto";

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
    const permissions = dto.permissionIds?.length
      ? await this.permissionRepo.findByIds(dto.permissionIds)
      : [];
  
    const group = this.groupRepo.create({
      name: dto.name,
      description: dto.description,
      permissions,
    });
    const savedGroup = await this.groupRepo.save(group);
  
    if (dto.userIds?.length) {
      const users = await this.userRepo.findByIds(dto.userIds);
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
    const group = await this.groupRepo.findOneBy({group_id: dto.groupId});
    const user = await this.userRepo.findOneBy({user_id: dto.userId})

    if (!group || !user) throw new NotFoundException("Group or User not found");

    const existing_group = await this.userGroupRepo.findOne({
      where: {user: {user_id: dto.userId}, group: {group_id: dto.groupId}},
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


  //Remove user from a usergroup
  async removeUserFromGroup(dto: CreateUserGroupDto): Promise<void>{
    const userGroup = await this.userGroupRepo.findOne({
      where: {user: {user_id: dto.userId}, group: {group_id: dto.groupId}},
      relations: ['user', 'group'],
    })

    if (!userGroup) throw new NotFoundException("User not in group");
    await this.userGroupRepo.remove(userGroup);
  }

  //Permission Endpoints

  //Add permission to group
  async addPermissionToGroup(dto: CreateUserGroupPermissionDto): Promise<Group> {
    const group = await this.groupRepo.findOne({
      where: { group_id: dto.groupId },
      relations: ['permissions'],
    });
  
    if (!group) {
      throw new NotFoundException('Group not found');
    }
  
    if (!dto.permissionId || !dto.permissionId.length) {
      throw new BadRequestException('No permissions provided');
    }

    const permissionsToAdd = await this.permissionRepo.findByIds(dto.permissionId);

    // Filter out duplicates
    const existingPermissionIds = group.permissions.map(p => p.permission_id);
    const newPermissions = permissionsToAdd.filter(
      p => !existingPermissionIds.includes(p.permission_id),
    );
  
    if (newPermissions.length === 0) {
      throw new ConflictException('All permissions already assigned to group');
    }
  
    group.permissions.push(...newPermissions);
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
