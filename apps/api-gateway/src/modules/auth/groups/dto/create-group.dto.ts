import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
// dto
import { UserGroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/user-group.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class CreateGroupDto {
  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ required: false, description: 'description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'userGroups', type: [UserGroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserGroupDto)
  userGroups?: UserGroupDto[];

  @ApiProperty({ description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @IsOptional()
  @Type(() => PermissionDto)
  permissions?: PermissionDto[];

}