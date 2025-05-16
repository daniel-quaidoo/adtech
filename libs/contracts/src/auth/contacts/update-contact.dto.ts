import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';
export class UpdateContactDto {
  id?: String;
  user?: CreateUserDto;
  first_name?: String;
  last_name?: String;
  email?: String;
  relation?: String;
  number?: String;
  is_emergency_contact?: boolean;
}