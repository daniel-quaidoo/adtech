import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID } from 'class-validator';

export class CreateUserGroupPermissionDto {
  @ApiProperty({
    description: 'Group ID to which permissions will be added',
    example: '9a2b1f5d-3ef2-4d9a-bc3d-8f9d2f60ea3c',
  })
  @IsUUID()
  groupId: string;

  @ApiProperty({
    description: 'Array of permission IDs to add to group',
    example: ['perm-uuid-1', 'perm-uuid-2'],
  })
  @IsArray()

  permissionId: string[];
}
