import { ApiProperty } from "@nestjs/swagger";
import {  IsOptional, IsString } from "class-validator";

export class UpdateContactDto{

    @ApiProperty({description: 'Emergency contact name', example: 'Akua Aidoo'})
    @IsOptional()
    @IsString()
    emergency_contact_name?: string;

    @ApiProperty({description: 'Emergency contact email', example: 'akuaaidoo@gmail.com'})
    @IsOptional()
    @IsString()
    emergency_contact_email?: string;

    @ApiProperty({description: 'Emergency contact relation', example: 'sister'})
    @IsOptional()
    @IsString()
    emergency_contact_relation?: string;

    @ApiProperty({description: 'Emergency contact number', example: '+233 224 567 891'})
    @IsOptional()
    @IsString()
    emergency_contact_number?: string;
}