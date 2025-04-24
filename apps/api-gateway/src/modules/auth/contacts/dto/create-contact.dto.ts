import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
export class CreateContactDto {
  @ApiProperty({ description: 'id' })
  @IsString()
  id: String;

  @ApiProperty({ description: 'user', type: [UserDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserDto)
  user: UserDto[];

  @ApiProperty({ description: 'emergency_contact_name' })
  @IsString()
  emergency_contact_name: String;

  @ApiProperty({ description: 'emergency_contact_email' })
  @IsString()
  emergency_contact_email: String;

  @ApiProperty({ description: 'emergency_contact_relation' })
  @IsString()
  emergency_contact_relation: String;

  @ApiProperty({ description: 'emergency_contact_number' })
  @IsString()
  emergency_contact_number: String;

}