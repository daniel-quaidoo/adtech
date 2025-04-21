import { ApiProperty } from "@nestjs/swagger";

export class RoleDto{
    @ApiProperty({description: 'Role ID', example: '1'})
    role_id: number;

    @ApiProperty({description: 'Role name', example: 'Admin'})
    name: string;

    @ApiProperty({description: 'Alias', example: 'Organization Admin'})
    alias: string;

    @ApiProperty({description: 'Description', example: 'Manages organization level'})
    description: string;
}