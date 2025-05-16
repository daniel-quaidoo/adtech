import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';
// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';

export class CreateContactDto {
  @ApiProperty({ description: 'id' })
  @IsString()
  id: String;

  @ApiProperty({ description: 'user', type: UserDto })
  @IsOptional()
  @Type(() => UserDto)
  user: UserDto;

  @ApiProperty({ description: 'first_name' })
  @IsString()
  first_name: String;

  @ApiProperty({ description: 'last_name' })
  @IsString()
  last_name: String;

  @ApiProperty({ description: 'email' })
  @IsString()
  email: String;

  @ApiProperty({ description: 'relation' })
  @IsString()
  relation: String;

  @ApiProperty({ description: 'number' })
  @IsString()
  number: String;

  @ApiProperty({ description: 'is_emergency_contact' })
  @IsBoolean()
  is_emergency_contact: boolean;
}