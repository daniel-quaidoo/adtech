
import { TransactionTypeEnum } from '@lib/contracts/billing/enums/transaction-type.enum';

export class CreateTransactionTypeDto {
    
    transaction_type_name: TransactionTypeEnum;
    transaction_type_description: string;
}
