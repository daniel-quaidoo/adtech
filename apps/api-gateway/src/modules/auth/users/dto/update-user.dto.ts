import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsDate } from 'class-validator';

//enums
import { Gender } from "@lib/contracts/auth/users/enums/gender.enum";

export class UpdateUserDto{
    
    @ApiProperty({description: 'User first name', example: 'Ama'})
    @IsString()
    @IsOptional()
    first_name?: string;

    @ApiProperty({description: 'User last name', example: 'Aidoo'})
    @IsString()
    @IsOptional()
    last_name?: string;

    @ApiProperty({description: 'User email', example: 'amaaidoo@abc.com'})
    @IsString()
    @IsOptional()
    email?: String;

    @ApiProperty({description: 'Phone number', example: '+233 0002221111'})
    @IsString()
    @IsOptional()
    phone_number?: string;

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
    @IsOptional()
    gender?: Gender;

    @ApiProperty({description: 'Date of birth', example: '02/12/2000'})
    @IsDate()
    @IsOptional()
    date_of_birth?: Date;

    @ApiProperty({description: 'Employer name', example: 'Bank of Ghana'})
    @IsString()
    @IsOptional()
    employer_name?: string;

    @ApiProperty({description: 'Occupation Status', example: 'employed'})
    @IsString()
    @IsOptional()
    occupation_status?: string;

    @ApiProperty({description: 'Occupation Location', example: 'Accra'})
    @IsString()
    @IsOptional()
    occupation_location?: string;
    
}