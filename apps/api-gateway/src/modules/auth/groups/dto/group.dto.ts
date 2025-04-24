import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsString } from 'class-validator';

// dto
import { UserGroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/user-group.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class GroupDto {
  @ApiProperty({ description: 'group_id' })
  @IsString()
  group_id: string;

  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ required: false, description: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'created_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  created_at: Date;

  @ApiProperty({ description: 'updated_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  updated_at: Date;

  @ApiProperty({ description: 'userGroups', type: [UserGroupDto] })
  @IsArray()
  @Type(() => UserGroupDto)
  userGroups: UserGroupDto[];

  @ApiProperty({ description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @Type(() => PermissionDto)
  permissions: PermissionDto[];

}