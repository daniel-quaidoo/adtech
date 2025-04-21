import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Length } from "class-validator";


export class UpdateGroupDto{

    @ApiProperty({description: 'Group Name', example: 'Finance'})
    @IsOptional()
    @IsString()
    @Length(1, 80)
    name?:String;

    @ApiProperty({description: 'Group Description', example: 'For  users in finance department'})
    @IsOptional()
    @IsString()
    description?: String;
}