import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

//services
import { RolesService } from './roles.service';

//dto
// import { CreateRoleDto } from '@lib/contracts/auth/roles/create-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService){}

    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.rolesService.create(dto);
    }

    @Get()
    findAll(){
        return this.rolesService.findAll();
    }

    @Get(':roleId')
    findOne(@Param('roleId') roleId:number ){
        return this.rolesService.findOne(roleId);
    }
    
    @Patch(':roleId')
    update(@Param('roleId', ParseIntPipe) roleId:number, @Body() dto: UpdateRoleDto){
        return this.rolesService.update(roleId, dto );
    }

    @Delete(':roleId')
    remove(@Param('roleId', ParseIntPipe) roleId:number){
        return this.rolesService.delete(roleId);
    }
}
