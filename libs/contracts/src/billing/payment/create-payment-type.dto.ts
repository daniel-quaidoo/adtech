// import { PaymentTypeEnum } from '@lib/contracts/billing/enums/payment-type.enum';

export class CreatePaymentTypeDto {
    payment_type_name: string;
    payment_type_description: string;
    payment_partitions: number;
}