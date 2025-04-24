import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class UpdateRoleDto {
  @ApiProperty({ required: false, description: 'role_id' })
  @IsNumber()
  @IsOptional()
  role_id?: number;

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

  @ApiProperty({ required: false, description: 'users', type: [UserDto] })
  @IsArray()
  @IsOptional()
  @Type(() => UserDto)
  users?: UserDto[];

  @ApiProperty({ required: false, description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @IsOptional()
  @Type(() => PermissionDto)
  permissions?: PermissionDto[];

}