import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsEnum, IsDate, IsArray } from 'class-validator';

//enums
import { Gender } from "@lib/contracts/auth/users/enums/gender.enum";
import { Type } from 'class-transformer';

export class CreateUserDto{
    
    @ApiProperty({description: 'User first name', example: 'Ama'})
    @IsString()
    first_name: string;

    @ApiProperty({description: 'User last name', example: 'Aidoo'})
    @IsString()
    last_name: string;

    @ApiProperty({description: 'User email', example: 'amaaidoo@abc.com'})
    @IsString()
    email: String;

    @ApiProperty({description: 'Phone number', example: '+233 0002221111'})
    @IsString()
    phone_number: string;

    @ApiProperty({description: 'Identification number', example: 'GHX4290-3932'})
    @IsString()
    @IsOptional()
    identification_number?: string;

    @ApiProperty({description: 'Photo URL', example: 'https://folder/picture.com'})
    @IsString()
    @IsOptional()
    photo_url?: string;

    @ApiProperty({description: 'Gender', example: 'Female'})
    @IsEnum(Gender)
    gender: Gender;

    @ApiProperty({description: 'Date of birth', example: '02/12/2000'})
    @IsDate()
    @Type(() => Date)
    date_of_birth: Date;

    @ApiProperty({description: 'Employer name', example: 'Bank of Ghana'})
    @IsString()
    @IsOptional()
    employer_name?: string;

    @ApiProperty({description: 'Occupation Status', example: 'employed'})
    @IsString()
    occupation_status: string;

    @ApiProperty({description: 'Occupation Location', example: 'Accra'})
    @IsString()
    @IsOptional()
    occupation_location?: string;

    @ApiProperty({description: 'IDs of roles assigned to this user'})
    @IsArray()
    @IsOptional()   
    roleIds?: string[];
    
}