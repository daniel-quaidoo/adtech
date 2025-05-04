import { PaymentTypeEnum } from '@lib/contracts/billing/enums/payment-type.enum';

export class PaymentTypeDto {
    payment_type_id: number;
    payment_type_name: PaymentTypeEnum;
    payment_type_description: string;
    payment_partitions: number;
}