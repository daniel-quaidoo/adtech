import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';

export class UpdateContactDto {
  @ApiProperty({ required: false, description: 'id' })
  @IsString()
  @IsOptional()
  id?: String;

  @ApiProperty({ required: false, description: 'user', type: UserDto })
  @IsOptional()
  @Type(() => UserDto)
  user?: UserDto;

  @ApiProperty({ required: false, description: 'first_name' })
  @IsString()
  @IsOptional()
  first_name?: String;

  @ApiProperty({ required: false, description: 'last_name' })
  @IsString()
  @IsOptional()
  last_name?: String;

  @ApiProperty({ required: false, description: 'email' })
  @IsString()
  @IsOptional()
  email?: String;

  @ApiProperty({ required: false, description: 'relation' })
  @IsString()
  @IsOptional()
  relation?: String;

  @ApiProperty({ required: false, description: 'number' })
  @IsString()
  @IsOptional()
  number?: String;

  @ApiProperty({ required: false, description: 'is_emergency_contact' })
  @IsBoolean()
  @IsOptional()
  is_emergency_contact?: boolean;
}