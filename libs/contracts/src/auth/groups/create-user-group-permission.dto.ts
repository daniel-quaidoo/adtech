import { IsArray, IsUUID } from 'class-validator';

export class CreateUserGroupPermissionDto {
  @IsUUID()
  groupId: string;

  @IsArray()
  permissionId: string[];
}
