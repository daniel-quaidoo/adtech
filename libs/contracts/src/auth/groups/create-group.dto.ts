export class CreateGroupDto {
  name: string;
  userIds?: string[];
  permissionIds?: string[];
  description?: string;
}
