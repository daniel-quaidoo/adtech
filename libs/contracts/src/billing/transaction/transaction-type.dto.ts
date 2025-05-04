
import { TransactionTypeEnum } from '@lib/contracts/billing/enums/transaction-type.enum';

export class TransactionTypeDto {

    transaction_type_id: number;
    transaction_type_name: TransactionTypeEnum;
    transaction_type_description: string;
}
