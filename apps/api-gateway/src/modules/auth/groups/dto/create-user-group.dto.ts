import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
// dto
import { UserDto } from 'apps/api-gateway/src/modules/auth/users/dto/user.dto';
import { GroupDto } from 'apps/api-gateway/src/modules/auth/groups/dto/group.dto';

export class CreateUserGroupDto {
  @ApiProperty({ description: 'user_group_id' })
  @IsString()
  user_group_id: string;

  @ApiProperty({ description: 'user', type: [UserDto] })
  @IsOptional()
  @Type(() => UserDto)
  user: UserDto;

  @ApiProperty({ description: 'group', type: [GroupDto] })
  @IsOptional()
  @Type(() => GroupDto)
  group: GroupDto;

  @ApiProperty({ description: 'isActive' })
  @IsString()
  isActive: boolean;

  @ApiProperty({ description: 'created_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  created_at: Date;

  @ApiProperty({ description: 'updated_at', type: String, format: 'date' })
  @IsDate()
  @Type(() => Date)
  updated_at: Date;

}