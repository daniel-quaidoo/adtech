import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from 'class-validator';

export class UpdateRoleDto{

    @ApiProperty({description: 'Role name', example: 'Admin'})
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({description: 'Alias', example: 'Organization Admin'})
    @IsString()
    @IsOptional()
    alias?: string;

    @IsString()
    @ApiProperty({description: 'Description', example: 'Manages organization level'})
    @IsOptional()
    description?: string;
}