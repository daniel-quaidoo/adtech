//enums
import { InvoiceTypeEnum } from "@lib/contracts/billing/enums/invoice-type.enum";
import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";

import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

//dto
import { TransactionDto } from "../../transaction/dto/transaction.dto";
import { UserDto } from "../../../auth/users/dto/user.dto";
import { InvoiceItemDto } from "./invoice-item.dto";


export class InvoiceDto{

    @ApiProperty({description: 'Invoice ID', example: 'INV12345'})
    @IsString()
    invoice_id: string;

    @ApiProperty({description: 'Invoice Number', example: '2023-001'})
    @IsString()
    invoice_number: string;

    @ApiProperty({description: 'User ID of Invoice Buyer', example: '47849da9-ebd1-4b02-9517-8717791fdd5c'})
    @Type(() => UserDto)
    issued_by: UserDto;

    @ApiProperty({description: 'User ID of Invoice Payer', example: '47849da9-ebd1-4b02-9517-8717791fdd5c'})
    @Type(() => UserDto)
    issued_to: UserDto;

    @ApiProperty({description: 'Invoice Details', example: 'Payment for subscription services'})
    @IsString()
    invoice_details: string;

    @ApiProperty({description: 'Invoice Amount', example: 150.75})
    @IsNumber()
    invoice_amount: number;

    @ApiProperty({description: 'Invoice due date', example: '2023-12-31T23:59:59.000Z'})
    @IsDate()
    due_date: Date;

    @ApiProperty({description: 'Invoice date paid', example: '2023-12-15T14:30:00.000Z'})
    @IsDate()
    date_paid: Date;

    @ApiProperty({description: 'Invoice type', example: 'subscription'})
    @IsEnum(InvoiceTypeEnum)
    invoice_type: InvoiceTypeEnum;

    @ApiProperty({description: 'Invoice Payment status', example: 'paid'})
    @IsEnum(PaymentStatusEnum)
    status: PaymentStatusEnum;

    @ApiProperty({description: 'Invoice items', example: ''})
    @Type(() => InvoiceItemDto)
    items: InvoiceItemDto[];

    @ApiProperty({description: 'Invoice transactions', example: ''})
    @Type(() => TransactionDto)
    transactions: TransactionDto[];
}

// invoice_id:string;
// invoice_number:string;
// issued_by: UserDto;
// issued_to: UserDto;
// invoice_details:string;
// invoice_amount:number;
// due_date:Date;
// date_paid: Date;
// invoice_type: InvoiceTypeEnum;
// status: PaymentStatusEnum;
// items: InvoiceItemDto[];
// transactions: TransactionDto[];