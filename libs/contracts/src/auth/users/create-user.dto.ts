import { Gender } from '@lib/contracts/auth/users/enums/gender.enum';
import { CreateRoleDto } from '@lib/contracts/auth/roles/create-role.dto';
import { CreateUserGroupDto } from '@lib/contracts/auth/groups/create-user-group.dto';
import { CreateContactDto } from '@lib/contracts/auth/contacts/create-contact.dto';

export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: String;
  phone_number: string;
  identification_number: string;
  photo_url: string;
  gender: Gender;
  date_of_birth: Date;
  employer_name: string;
  occupation_status: string;
  occupation_location: string;
  roles: CreateRoleDto[];
  userGroups: CreateUserGroupDto[];
  contacts: CreateContactDto[];
}