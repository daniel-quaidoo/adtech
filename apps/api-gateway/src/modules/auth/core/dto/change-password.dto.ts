import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {
    @ApiProperty({ description: 'The email of the user' })
    @IsString()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ description: 'The reset token sent to the user' })
    @IsString()
    @IsNotEmpty()
    token!: string;

    @ApiProperty({ description: 'The new password for the user' })
    @IsString()
    @IsNotEmpty()
    newPassword!: string;
}

