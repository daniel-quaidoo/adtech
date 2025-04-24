import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';
import { CreatePermissionDto } from '@lib/contracts/auth/permissions/create-permission.dto';

export class UpdateRoleDto {
  role_id?: number;
  name?: string;
  alias?: string;
  description?: string;
  users?: CreateUserDto[];
  permissions?: CreatePermissionDto[];
}