
import { UserDto } from '../users/user.dto';
import { GroupDto } from './group.dto';

export class UserGroupDto {
  user_group_id: string;
  user: UserDto;
  group: GroupDto;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

