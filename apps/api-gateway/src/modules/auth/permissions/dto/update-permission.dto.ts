import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

// dto
import { RoleDto } from 'apps/api-gateway/src/modules/auth/roles/dto/role.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';

export class UpdatePermissionDto {
  @ApiProperty({ required: false, description: 'permission_id' })
  @IsString()
  @IsOptional()
  permission_id?: string;

  @ApiProperty({ required: false, description: 'name' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false, description: 'alias' })
  @IsString()
  @IsOptional()
  alias?: string;

  @ApiProperty({ required: false, description: 'description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false, description: 'roles', type: [RoleDto] })
  @IsArray()
  @IsOptional()
  @Type(() => RoleDto)
  roles?: RoleDto[];

  @ApiProperty({ required: false, description: 'groups', type: [GroupDto] })
  @IsArray()
  @IsOptional()
  @Type(() => GroupDto)
  groups?: GroupDto[];

}