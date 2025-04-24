import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';
import { CreatePermissionDto } from '@lib/contracts/auth/permissions/create-permission.dto';

export class CreateRoleDto {
  name: string;
  alias: string;
  description: string;
  users: CreateUserDto[];
  permissions: CreatePermissionDto[];
}