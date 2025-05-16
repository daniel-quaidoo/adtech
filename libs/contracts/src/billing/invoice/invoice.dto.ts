//enums
import { InvoiceTypeEnum } from "@lib/contracts/billing/enums/invoice-type.enum";
import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";

//dto

import { InvoiceItemDto } from "./invoice-item.dto";
import { UserDto } from "@lib/contracts/auth/users/user.dto";
import { TransactionDto } from "../transaction/transaction.dto";


export class InvoiceDto{
    invoice_id: string;
    issued_by: string;
    issued_to: string;
    invoice_details: string;
    invoice_amount: number;
    due_date: Date;
    date_paid: Date;
    invoice_type: InvoiceTypeEnum;
    status: PaymentStatusEnum;
    item_ids?: string[];
    transaction_ids?: string[];
}

