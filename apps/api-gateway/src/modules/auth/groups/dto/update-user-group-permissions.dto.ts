import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class UpdateUserGroupPermissionDto {
  @ApiProperty({ required: false, description: 'user_group_permission_id' })
  @IsString()
  @IsOptional()
  user_group_permission_id?: string;

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

  @ApiProperty({ required: false, description: 'permission', type: [PermissionDto] })
  @IsArray()
  @IsOptional()
  @Type(() => PermissionDto)
  permission?: PermissionDto[];

  @ApiProperty({ required: false, description: 'granted_by', type: [UserDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserDto)
  granted_by?: UserDto[];

  @ApiProperty({ required: false, description: 'granted_reason' })
  @IsString()
  @IsOptional()
  granted_reason?: string;

  @ApiProperty({ required: false, description: 'expires_at', type: String, format: 'date' })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  expires_at?: Date;

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