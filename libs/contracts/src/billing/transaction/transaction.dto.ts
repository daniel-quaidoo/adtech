import { PaymentStatusEnum } from '@lib/contracts/billing/enums/payment-status.enum';
//dto

import { PaymentTypeDto } from '../payment/payment-type.dto';
import { TransactionTypeDto } from './transaction-type.dto';
import { InvoiceDto } from '../invoice/invoice.dto';
import { PaymentChannelDto } from '../payment/payment-channel.dto';


export class TransactionDto {

    transaction_id: string;
    payment_type_id: PaymentTypeDto;
    payment_channel:PaymentChannelDto;
    transaction_date: Date;
    transaction_details?: string;
    transaction_type_id: TransactionTypeDto;
    invoice_number: InvoiceDto;
    transaction_amount: number;
    transaction_status: PaymentStatusEnum;
    reference_number: string;
}
