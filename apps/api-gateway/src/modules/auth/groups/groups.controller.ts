import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

// entity
import { Group } from "./entities/group.entity";

// service
import { GroupsService } from "./groups.service";

// dto
import { CreateGroupDto } from "./dto/create-group.dto";
import { CreateUserGroupDto } from "./dto/create-user-group.dto";
import { CreateUserGroupPermissionDto } from "./dto/create-user-group-permissions.dto";

@ApiTags('Groups')
@Controller('groups')
export class GroupsController{
    constructor(private readonly groupsService: GroupsService){}

    //Group endpoints
    @Post()
    async createGroup(@Body() dto: CreateGroupDto){
        return this.groupsService.create(dto);
    }

    @Get()
    findAll(){
        return this.groupsService.findAll()
    }

    @Get(':groupId')
    async getGroupById(@Param('groupId') groupId:string){
        return this.groupsService.findOne(groupId);
    }

    @Delete(':groupId')
    async deleteGroup(@Param('groupId') groupId:string){
        return this.groupsService.remove(groupId)
    }

    //User group endpoinrs
    @Post('add/users')
    async addUserToGroup(@Body() dto: CreateUserGroupDto){
        return this.groupsService.addUserToGroup(dto);
    }

    @Get(':groupId/users')
    async getUsersInGroup(@Param('groupId') groupId: string){
        return this.groupsService.getUsersInGroup(groupId);
    }

    @Delete(':groupId/users/:userId')
    async removeUserFromGroup(
        @Param('groupId') groupId: string,
        @Param('userId') userId: string,
    ){
        return this.groupsService.removeUserFromGroup(groupId, userId)
    }

    //User group permissions:

    @Post('add/permissions')
    async addPermissionToGroup(
      @Body() dto: CreateUserGroupPermissionDto,
    ): Promise<Group> {
      return this.groupsService.addPermissionToGroup(dto);
    }
    


    @Get(':groupId/permissions')
    async getAllPermissions(@Param(':groupId') groupId: string){
        return this.groupsService.getPermissionsInGroup(groupId)
    }


    @Delete(':groupId/permissions/:permissionId')
    async removePermissionFromGroup(
        @Param('groupId') groupId: string,
        @Param('permissionId') permissionId: string
    ): Promise<void> {
    return this.groupsService.removePermissionFromGroup(groupId, permissionId);
    }



}