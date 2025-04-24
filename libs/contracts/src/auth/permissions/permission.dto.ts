import { CreateRoleDto } from '@lib/contracts/auth/roles/create-role.dto';
import { CreateGroupDto } from '@lib/contracts/auth/groups/create-group.dto';

export class PermissionDto {
  permission_id: string;
  name: string;
  alias: string;
  description: string;
  roles: CreateRoleDto[];
  groups: CreateGroupDto[];
}