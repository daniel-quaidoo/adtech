import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsOptional,
  IsString,
  Length,
  IsUUID,
} from "class-validator";

export class CreateGroupDto {
  @ApiProperty({ description: "Group Name", example: "Finance" })
  @IsString()
  @Length(1, 80)
  name: string;

  @ApiProperty({
    description: "Group Description",
    example: "For users in finance department",
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: "IDs of users to associate with the group",
    example: ["9a2b1f5d-3ef2-4d9a-bc3d-8f9d2f60ea3c"],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsUUID("all", { each: true })
  userIds?: string[];

  @ApiProperty({
    description: 'IDs of permissions to assign to the group',
    example: ['perm-1', 'perm-2'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  permissionIds?: string[];
}
