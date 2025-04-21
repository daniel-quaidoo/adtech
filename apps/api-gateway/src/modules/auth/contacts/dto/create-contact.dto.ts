import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto{


    @ApiProperty({description: 'User ID', example: '1'})
    @IsNotEmpty()
    @IsString()
    user_id:string;

    @ApiProperty({description: 'Emergency contact name', example: 'Akua Aidoo'})
    @IsNotEmpty()
    @IsString()
    emergency_contact_name: string;

    @ApiProperty({description: 'Emergency contact email', example: 'akuaaidoo@gmail.com'})
    @IsNotEmpty()
    @IsString()
    emergency_contact_email: string;

    @ApiProperty({description: 'Emergency contact relation', example: 'sister'})
    @IsNotEmpty()
    @IsString()
    emergency_contact_relation: string;

    @ApiProperty({description: 'Emergency contact number', example: '+233 224 567 891'})
    @IsNotEmpty()
    @IsString()
    emergency_contact_number: string;
}