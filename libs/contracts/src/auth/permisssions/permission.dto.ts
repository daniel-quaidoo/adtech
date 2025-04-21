import { ApiProperty } from "@nestjs/swagger";

export class PermissionDto{
    @ApiProperty({description: 'Permission ID', example: '1'})
    permission_id: string;

    @ApiProperty({description: 'Permission name', example: 'CREATE_USER '})
    name: string;

    @ApiProperty({description: 'Alias', example: 'create_user'})
    alias: string;

    @ApiProperty({description: 'Description', example: 'Allows creating new users'})
    description: string;
}