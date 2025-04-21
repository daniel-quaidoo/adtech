import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
//services
import { UsersService } from './users.service';

//dto
import { CreateUserDto } from './dto/create-user.dto';
import { AssignRoleDto } from './dto/assign-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService ){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.usersService.create(dto);
    }

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':userId')
    findOne(@Param('userId') userId:string){
        return this.usersService.findOne(userId)
    }

    @Patch(':userId')
    async updateUser(
        @Param('userId') userId:string,
        @Body() dto: UpdateUserDto,
    ){
        return this.usersService.updateUser(userId,dto);
    }
    
    @Patch(':userId/roles')
    async assignRoles(
        @Param('userId') userId:string,
        @Body() dto: AssignRoleDto,

    ){
        return this.usersService.assignRoleToUser(userId, dto.roleIds)
    }

    @Delete(':userId/roles/:roleId')
    async removeRole(
        @Param('userId') userId: string,
        @Param('roleId') roleId: number,
    ){
        return this.usersService.removeRoleFromUser(userId, roleId);
    }
       
    



}
