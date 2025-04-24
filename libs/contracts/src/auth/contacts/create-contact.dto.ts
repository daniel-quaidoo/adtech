import { UserDto } from '../users/user.dto';

export class CreateContactDto {
  user: UserDto;
  emergency_contact_name: String;
  emergency_contact_email: String;
  emergency_contact_relation: String;
  emergency_contact_number: String;
}