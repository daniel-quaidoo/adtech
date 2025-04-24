import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
//dto
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Controller('permissions')
export class PermissionsController {
    constructor(private readonly permissionsService: PermissionsService){}

    @Post()
    create(@Body() dto: CreatePermissionDto){
        return this.permissionsService.create(dto);
    }

    @Get()
    findAll(){
        return this.permissionsService.findAll();
    }

    @Get(':permissionId')
    findOne(@Param('permissionId') permissionId:string){
        return this.permissionsService.findOne(permissionId)
    }

    @Patch(':permissionId')
    update(@Param('permissionId') permissionId:string, @Body() dto:UpdatePermissionDto){
        return this.permissionsService.update(permissionId, dto)
    }

    @Delete(':permissionId')
    remove(@Param('permissionId') permissionId: string){
        return this.permissionsService.delete(permissionId)
    }
}
