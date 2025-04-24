import { CreateUserDto } from '@lib/contracts/auth/users/create-user.dto';

export class UpdateContactDto {
  id?: String;
  user?: CreateUserDto;
  emergency_contact_name?: String;
  emergency_contact_email?: String;
  emergency_contact_relation?: String;
  emergency_contact_number?: String;
}