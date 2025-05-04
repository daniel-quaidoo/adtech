import { PaymentTypeEnum } from "@lib/contracts/billing/enums/payment-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('payment_type')
export class PaymentType{
    @PrimaryGeneratedColumn()
    payment_type_id: number;

    @Column({ type: 'enum', enum: PaymentTypeEnum })
    payment_type_name: PaymentTypeEnum;

    @Column({ type: 'text', nullable: true })
    payment_type_description: string;

    @Column({ nullable: true })
    payment_partitions: number;
}