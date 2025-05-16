import { PaymentStatusEnum } from '@lib/contracts/billing/enums/payment-status.enum';
import { TransactionTypeDto } from './transaction-type.dto';
import { InvoiceDto } from '@app/api-gateway/src/modules/billing/invoice/dto/invoice.dto';
import { Invoice } from '@app/api-gateway/src/modules/billing/invoice/entities/invoice.entity';
import { PaymentType } from '@app/api-gateway/src/modules/billing/payment/entities/payment-type.entity';
import { PaymentTypeDto } from '../payment/payment-type.dto';
import { PaymentChannelDto } from '../payment/payment-channel.dto';


export class CreateTransactionDto {
    
    transaction_id: string;
    payment_type?: PaymentTypeDto;
    payment_channel?:PaymentChannelDto;
    transaction_date: Date;
    transaction_details?: string;
    transaction_type: TransactionTypeDto;
    invoice: Invoice;
    transaction_amount: number;
    transaction_status: PaymentStatusEnum;
    reference_number: string;
}
