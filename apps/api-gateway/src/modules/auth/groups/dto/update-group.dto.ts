import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

// dto
import { UserGroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/user-group.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class UpdateGroupDto {
  @ApiProperty({ required: false, description: 'group_id' })
  @IsString()
  @IsOptional()
  group_id?: string;

  @ApiProperty({ required: false, description: 'name' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, description: 'description' })
  @IsString()
  @IsOptional()
  description?: string;

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

  @ApiProperty({ required: false, description: 'userGroups', type: [UserGroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserGroupDto)
  userGroups?: UserGroupDto[];

  @ApiProperty({ required: false, description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @IsOptional()
  @Type(() => PermissionDto)
  permissions?: PermissionDto[];

}