import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from 'class-validator';

export class CreatePermissionDto{

    @ApiProperty({description: 'Permission name', example: 'CREATE_USER '})
    @IsString()
    name: string;

    @ApiProperty({description: 'Alias', example: 'create_user'})
    @IsString()
    alias?: string;

    @IsString()
    @ApiProperty({description: 'Description', example: 'Allows creating new users'})
    description: string;
}