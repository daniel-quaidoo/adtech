import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

// dto
import { RoleDto } from 'apps/api-gateway/src/modules/auth/roles/dto/role.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';

export class PermissionDto {
  @ApiProperty({ description: 'permission_id' })
  @IsString()
  permission_id: string;

  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'alias' })
  @IsString()
  alias: string;

  @ApiProperty({ description: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'roles', type: [RoleDto] })
  @IsArray()
  @Type(() => RoleDto)
  roles: RoleDto[];

  @ApiProperty({ description: 'groups', type: [GroupDto] })
  @IsArray()
  @Type(() => GroupDto)
  groups: GroupDto[];

}