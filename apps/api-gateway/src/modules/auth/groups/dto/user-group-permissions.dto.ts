import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class UserGroupPermissionDto {
  @ApiProperty({ description: 'user_group_permission_id' })
  @IsString()
  user_group_permission_id: string;

  @ApiProperty({ description: 'user', type: [UserDto] })
  @IsArray()
  @Type(() => UserDto)
  user: UserDto[];

  @ApiProperty({ description: 'group', type: [GroupDto] })
  @IsArray()
  @Type(() => GroupDto)
  group: GroupDto[];

  @ApiProperty({ description: 'permission', type: [PermissionDto] })
  @IsArray()
  @Type(() => PermissionDto)
  permission: PermissionDto[];

  @ApiProperty({ description: 'granted_by', type: [UserDto] })
  @IsArray()
  @Type(() => UserDto)
  granted_by: UserDto[];

  @ApiProperty({ required: false, description: 'granted_reason' })
  @IsString()
  granted_reason: string;

  @ApiProperty({ required: false, description: 'expires_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  expires_at: Date;

  @ApiProperty({ description: 'created_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  created_at: Date;

  @ApiProperty({ description: 'updated_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  updated_at: Date;

}