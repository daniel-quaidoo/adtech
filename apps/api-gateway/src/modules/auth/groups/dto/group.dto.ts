import { ApiProperty } from "@nestjs/swagger";


export class GroupDto{

    @ApiProperty({description: 'Group ID', example: '1'})
    group_id: String;

    @ApiProperty({description: 'Group Name', example: 'Finance'})
    name:String;

    @ApiProperty({description: 'Group Description', example: 'For  users in finance department'})
    description: String;
}