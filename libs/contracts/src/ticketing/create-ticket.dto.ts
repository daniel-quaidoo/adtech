import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {IsString,IsEnum,IsOptional,IsUUID,IsEmail, Matches} from 'class-validator';
import { Type } from 'class-transformer';

//enums
import { TicketCategoryEnum } from '@lib/contracts/ticketing/enums/category.enum';
import { TicketSiteTypeEnum } from '@lib/contracts/ticketing/enums/site-type.enum';
import { TicketPriorityEnum } from '@lib/contracts/ticketing/enums/priority.enum';
import { TicketRequestTypeEnum } from '@lib/contracts/ticketing/enums/request-type.enum';
import { TicketStatusEnum } from '@lib/contracts/ticketing/enums/status.enum';

//enitity
import { User } from '@app/api-gateway/src/modules/auth/users/entities/user.entity';

//dto
import { UserDto } from '../auth/users/user.dto';


export class CreateTicketDto {

    @ApiProperty({ example: 'CS2345678', description: 'Unique case number' })
    @IsString()
    @Matches(/^CS\d{7}$/, { message: 'case_number must match format CS followed by 7 digits' })
    case_number: string;

    @ApiProperty({ description: 'Organization name' })
    @IsString()
    organization: string;

    @ApiProperty({ description: 'Location' })
    @IsString()
    location: string;

    @ApiPropertyOptional({ enum: TicketCategoryEnum, default: TicketCategoryEnum.GRG })
    @IsEnum(TicketCategoryEnum)
    @IsOptional()
    category?: TicketCategoryEnum;

    @ApiProperty({ description: 'Ticket description' })
    @IsString()
    description: string;

    @ApiProperty({ description: 'Ticket code, e.g., 5-character string' })
    @IsString()
    code: string;

    @ApiPropertyOptional({ enum: TicketSiteTypeEnum, default: TicketSiteTypeEnum.BRANCH })
    @IsEnum(TicketSiteTypeEnum)
    @IsOptional()
    site_type?: TicketSiteTypeEnum;

    @ApiPropertyOptional({ enum: TicketPriorityEnum, default: TicketPriorityEnum.LOW })
    @IsEnum(TicketPriorityEnum)
    @IsOptional()
    priority?: TicketPriorityEnum;

    @ApiProperty({ description: 'Contact name' })
    @IsString()
    contact_name: string;

    @ApiProperty({ description: 'Contact phone number' })
    @IsString()
    contact_phone: string;

    @ApiProperty({ description: 'Name of requester' })
    @IsString()
    requester_name: string;

    @ApiProperty({ description: 'Email of requester' })
    @IsEmail()
    requester_email: string;

    @ApiProperty({ description: 'Assigned user' , type: [UserDto]})
    @Type(() => UserDto)
    @IsUUID()
    assigned_to: User;

    @ApiProperty({ enum: TicketRequestTypeEnum })
    @IsEnum(TicketRequestTypeEnum)
    request_type: TicketRequestTypeEnum;

    @ApiProperty({ enum: TicketStatusEnum })
    @IsEnum(TicketStatusEnum)
    status: TicketStatusEnum;
}
