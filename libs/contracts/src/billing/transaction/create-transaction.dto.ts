import { PaymentTypeDto } from '@app/api-gateway/src/modules/billing/payment/dto/payment-type.dto';
import { PaymentStatusEnum } from '@lib/contracts/billing/enums/payment-status.enum';
import { TransactionTypeDto } from './transaction-type.dto';
import { InvoiceDto } from '@app/api-gateway/src/modules/billing/invoice/dto/invoice.dto';


export class CreateTransactionDto {
    
    transaction_number: string;
    payment_type: PaymentTypeDto;
    transaction_date: Date;
    transaction_details?: string;
    transaction_type: TransactionTypeDto;
    invoice: InvoiceDto;
    transaction_amount: number;
    transaction_status: PaymentStatusEnum;
    reference_number: string;
}
