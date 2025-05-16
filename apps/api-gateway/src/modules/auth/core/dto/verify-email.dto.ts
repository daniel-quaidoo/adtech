import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyEmailDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsString()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ description: 'The email verification token' })
    @IsString()
    @IsNotEmpty()
    token!: string;
}