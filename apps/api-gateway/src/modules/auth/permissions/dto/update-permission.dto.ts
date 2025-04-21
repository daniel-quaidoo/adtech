import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from 'class-validator';

export class UpdatePermissionDto{

    @ApiProperty({description: 'Permission name', example: 'CREATE_USER '})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({description: 'Alias', example: 'create_user'})
    @IsString()
    @IsOptional()
    alias?: string;

    @ApiProperty({description: 'Description', example: 'Allows creating new users'})
    @IsString()
    @IsOptional()
    description?: string;
}