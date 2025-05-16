import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MailActionDto {
    @ApiProperty({ description: 'The email of the user',  example: 'johndoe@compyler.io'})
    @IsString()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ description: 'The email verification token', example: 'a9534ee0-b83b-445c-bee2-8fa2eb8585bb' })
    @IsString()
    @IsNotEmpty()
    token!: string;
}