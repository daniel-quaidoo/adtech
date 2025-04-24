import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';

// enum
import { Gender } from '@lib/contracts/auth/users/enums/gender.enum';

// dto
import { RoleDto } from 'apps/api-gateway/src/modules/auth/roles/dto/role.dto';
import { UserGroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/user-group.dto';
import { ContactDto } from 'apps/api-gateway/src/modules/auth/contacts/dto/contact.dto';

export class UpdateUserDto {
  @ApiProperty({ required: false, description: 'user_id' })
  @IsString()
  @IsOptional()
  user_id?: string;

  @ApiProperty({ required: false, description: 'first_name' })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({ required: false, description: 'last_name' })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({ required: false, description: 'email' })
  @IsString()
  @IsOptional()
  email?: String;

  @ApiProperty({ required: false, description: 'phone_number' })
  @IsString()
  @IsOptional()
  phone_number?: string;

  @ApiProperty({ required: false, description: 'identification_number' })
  @IsString()
  @IsOptional()
  identification_number?: string;

  @ApiProperty({ required: false, description: 'photo_url' })
  @IsString()
  @IsOptional()
  photo_url?: string;

  @ApiProperty({ required: false, description: 'gender', enum: Gender })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @ApiProperty({ required: false, description: 'date_of_birth', type: String, format: 'date' })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  date_of_birth?: Date;

  @ApiProperty({ required: false, description: 'employer_name' })
  @IsString()
  @IsOptional()
  employer_name?: string;

  @ApiProperty({ required: false, description: 'occupation_status' })
  @IsString()
  @IsOptional()
  occupation_status?: string;

  @ApiProperty({ required: false, description: 'occupation_location' })
  @IsString()
  @IsOptional()
  occupation_location?: string;

  @ApiProperty({ required: false, description: 'roles', type: [RoleDto] })
  @IsArray()
  @IsOptional()
  @Type(() => RoleDto)
  roles?: RoleDto[];

  @ApiProperty({ required: false, description: 'userGroups', type: [UserGroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserGroupDto)
  userGroups?: UserGroupDto[];

  @ApiProperty({ required: false, description: 'contacts', type: [ContactDto] })
  @IsArray()
  @IsOptional()
  @Type(() => ContactDto)
  contacts?: ContactDto[];

}