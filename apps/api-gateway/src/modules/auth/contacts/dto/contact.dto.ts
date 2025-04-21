import { ApiProperty } from "@nestjs/swagger";

export class ContactDto{
    @ApiProperty({description: 'Contact ID', example: '1'})
    id:string;

    @ApiProperty({description: 'User ID', example: '1'})
    user_id:string;

    @ApiProperty({description: 'Emergency contact name', example: 'Akua Aidoo'})
    emergency_contact_name: string;

    @ApiProperty({description: 'Emergency contact email', example: 'akuaaidoo@gmail.com'})
    emergency_contact_email: string;

    @ApiProperty({description: 'Emergency contact relation', example: 'sister'})
    emergency_contact_relation: string;

    @ApiProperty({description: 'Emergency contact number', example: '+233 224 567 891'})
    emergency_contact_number: string;
}
