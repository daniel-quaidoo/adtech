import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { PermissionDto } from 'apps/api-gateway/src/modules/auth/permissions/dto/permission.dto';
export class CreateRoleDto {
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
  @IsOptional()
  @Type(() => UserDto)
  users: UserDto[];

  @ApiProperty({ description: 'permissions', type: [PermissionDto] })
  @IsArray()
  @IsOptional()
  @Type(() => PermissionDto)
  permissions: PermissionDto[];

}