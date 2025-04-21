import { IsUUID } from 'class-validator';

export class CreateUserGroupDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  groupId: string;
}
