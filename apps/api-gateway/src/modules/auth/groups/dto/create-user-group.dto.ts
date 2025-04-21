import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateUserGroupDto {
  @ApiProperty({
    description: 'ID of the user to be added to the group',
    example: 'a3f2b6c8-9e71-4d1a-8f04-3f97f9de561a',
  })
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'ID of the group the user will be added to',
    example: '9a2b1f5d-3ef2-4d9a-bc3d-8f9d2f60ea3c',
  })
  @IsUUID()
  groupId: string;
}
