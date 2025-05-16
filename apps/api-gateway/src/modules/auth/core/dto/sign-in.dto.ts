import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsString()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    password!: string;
}