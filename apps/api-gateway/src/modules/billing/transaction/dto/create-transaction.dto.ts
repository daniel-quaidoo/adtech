import { PaymentStatusEnum } from '@lib/contracts/billing/enums/payment-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { TransactionTypeDto } from './transaction-type.dto';
import { InvoiceDto } from '../../invoice/dto/invoice.dto';
import { PaymentTypeDto } from '../../payment/dto/payment-type.dto';
import { Invoice } from '../../invoice/entities/invoice.entity';
import { PaymentChannelDto } from '../../payment/dto/payment-channel.dto';

export class CreateTransactionDto {
    
    @ApiProperty({description: 'A unique transaction reference number (e.g., from Paystack or internal system)',example: 'TXN-20240502-001',})
    @IsString()
    @IsNotEmpty()
    transaction_id: string;

    @ApiProperty({description: 'ID of the payment type used',example: '1',})
    @IsNotEmpty()
    payment_type?: PaymentTypeDto;

    @ApiProperty({description: 'Channel for payment type', example: 'MTN Mobile Money'})
    @IsNotEmpty()
    payment_channel: PaymentChannelDto;

    @ApiProperty({description: 'Date and time when the transaction occurred',example: '2025-05-02T15:45:00.000Z',})
    @IsNotEmpty()
    transaction_date: Date;

    @ApiProperty({description: 'Optional notes or details about the transaction',example: 'Payment made via Paystack using debit card',required: false,})
    @IsOptional()
    @IsString()
    transaction_details?: string;

    @ApiProperty({description: 'ID of the transaction type',example: '1',})
    @IsNotEmpty()
    transaction_type: TransactionTypeDto;

    @ApiProperty({description: 'Invoice ID this transaction is associated with',example: 'INV-20240501-007',})
    @IsString()
    @IsNotEmpty()
    invoice: Invoice;

    @ApiProperty({description: 'Total transaction amount',example: 250.75,})
    @IsNumber()
    @IsNotEmpty()
    transaction_amount: number;

    @ApiProperty({description: 'Current payment status of the transaction',enum: PaymentStatusEnum,example: PaymentStatusEnum.Paid,})
    @IsEnum(PaymentStatusEnum)
    transaction_status: PaymentStatusEnum;

    @ApiProperty({description: 'Reference number from the payment provider (e.g., Paystack reference)',example: 'psk_ref_87hjsd8hjsa',})
    @IsString()
    @IsNotEmpty()
    reference_number: string;
}
