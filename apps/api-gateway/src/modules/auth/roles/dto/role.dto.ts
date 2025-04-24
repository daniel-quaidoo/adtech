import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';

export class RoleDto {
  @ApiProperty({ description: 'role_id' })
  @IsNumber()
  role_id: number;

  @ApiProperty({ description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'alias' })
  @IsString()
  alias: string;

  @ApiProperty({ description: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'users', type: [UserDto] })
  @IsArray()
  @Type(() => UserDto)
  users: UserDto[];

  @ApiProperty({ description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @Type(() => PermissionDto)
  permissions: PermissionDto[];

}