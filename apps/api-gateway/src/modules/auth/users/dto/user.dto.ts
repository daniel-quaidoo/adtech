import { ApiProperty } from "@nestjs/swagger";

//enums
import { Gender } from "@lib/contracts/auth/users/enums/gender.enum";

export class UserDto{
    @ApiProperty({description: 'User ID', example: '1'})
    user_id: string;

    @ApiProperty({description: 'User first name', example: 'Ama'})
    first_name: string;

    @ApiProperty({description: 'User last name', example: 'Aidoo'})
    last_name: string;

    @ApiProperty({description: 'User email', example: 'amaaidoo@abc.com'})
    email: String;

    @ApiProperty({description: 'Phone number', example: '+233 0002221111'})
    phone_number: string;

    @ApiProperty({description: 'Identification number', example: 'GHX4290-3932'})
    identification_number: string;

    @ApiProperty({description: 'Photo URL', example: 'https://folder/picture.com'})
    photo_url: string;

    @ApiProperty({description: 'Gender', example: 'female'})
    gender: Gender;

    @ApiProperty({description: 'Date of birth', example: '2000-12-02'})
    date_of_birth: Date;

    @ApiProperty({description: 'Employer name', example: 'Bank of Ghana'})
    employer_name: string;

    @ApiProperty({description: 'Occupation Status', example: 'employed'})
    occupation_status: string;

    @ApiProperty({description: 'Occupation Location', example: 'Accra'})
    occupation_location: string;
    
}
