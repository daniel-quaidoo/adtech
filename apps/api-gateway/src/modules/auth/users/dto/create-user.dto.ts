import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
// enum
import { Gender } from '@lib/contracts/auth/users/enums/gender.enum';
// dto
import { RoleDto } from 'apps/api-gateway/src/modules/auth/roles/dto/role.dto';
import { UserGroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/user-group.dto';
import { ContactDto } from 'apps/api-gateway/src/modules/auth/contacts/dto/contact.dto';
export class CreateUserDto {
  @ApiProperty({ description: 'first_name' })
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'last_name' })
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'email' })
  @IsString()
  email: String;

  @ApiProperty({ description: 'phone_number' })
  @IsString()
  phone_number: string;

  @ApiProperty({ description: 'identification_number' })
  @IsString()
  identification_number: string;

  @ApiProperty({ description: 'photo_url' })
  @IsString()
  photo_url: string;

  @ApiProperty({ description: 'gender', enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ description: 'date_of_birth', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  date_of_birth: Date;

  @ApiProperty({ description: 'employer_name' })
  @IsString()
  employer_name: string;

  @ApiProperty({ description: 'occupation_status' })
  @IsString()
  occupation_status: string;

  @ApiProperty({ description: 'occupation_location' })
  @IsString()
  occupation_location: string;

  @ApiProperty({ description: 'roles', type: [RoleDto] })
  @IsArray()
  @IsOptional()
  @Type(() => RoleDto)
  roles: RoleDto[];

  @ApiProperty({ description: 'userGroups', type: [UserGroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserGroupDto)
  userGroups: UserGroupDto[];

  @ApiProperty({ description: 'contacts', type: [ContactDto] })
  @IsArray()
  @IsOptional()
  @Type(() => ContactDto)
  contacts: ContactDto[];

}