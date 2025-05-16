import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsString()
    @IsNotEmpty()
    email!: string;
}