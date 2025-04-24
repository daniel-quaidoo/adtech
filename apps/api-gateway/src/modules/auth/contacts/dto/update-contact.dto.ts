import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';

export class UpdateContactDto {
  @ApiProperty({ required: false, description: 'id' })
  @IsString()
  @IsOptional()
  id?: String;

  @ApiProperty({ required: false, description: 'user', type: [UserDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserDto)
  user?: UserDto[];

  @ApiProperty({ required: false, description: 'emergency_contact_name' })
  @IsString()
  @IsOptional()
  emergency_contact_name?: String;

  @ApiProperty({ required: false, description: 'emergency_contact_email' })
  @IsString()
  @IsOptional()
  emergency_contact_email?: String;

  @ApiProperty({ required: false, description: 'emergency_contact_relation' })
  @IsString()
  @IsOptional()
  emergency_contact_relation?: String;

  @ApiProperty({ required: false, description: 'emergency_contact_number' })
  @IsString()
  @IsOptional()
  emergency_contact_number?: String;

}