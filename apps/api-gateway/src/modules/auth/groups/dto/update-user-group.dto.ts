import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';

export class UpdateUserGroupDto {
  @ApiProperty({ required: false, description: 'user_group_id' })
  @IsString()
  @IsOptional()
  user_group_id?: string;

  @ApiProperty({ required: false, description: 'user', type: [UserDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserDto)
  user?: UserDto[];

  @ApiProperty({ required: false, description: 'group', type: [GroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => GroupDto)
  group?: GroupDto[];

  @ApiProperty({ required: false, description: 'isActive' })
  @IsString()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ required: false, description: 'created_at', type: String, format: 'date' })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  created_at?: Date;

  @ApiProperty({ required: false, description: 'updated_at', type: String, format: 'date' })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  updated_at?: Date;

}