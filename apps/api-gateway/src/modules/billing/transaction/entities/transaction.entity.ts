import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentType } from "../../payment/entities/payment-type.entity";

import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";
import { TransactionType } from "./transaction-type.entity";
import { Invoice } from "../../invoice/entities/invoice.entity";


@Entity('transaction')
export class Transaction {
    
    @PrimaryGeneratedColumn('uuid')
    transaction_id: string;

    @Column()
    transaction_number: string;

    @ManyToOne(() => PaymentType)
    payment_type: PaymentType;

    @Column()
    transaction_date: Date;

    @Column({ type: 'text', nullable: true })
    transaction_details: string;

    @ManyToOne(() => TransactionType)
    transaction_type: TransactionType;

    @ManyToOne(() => Invoice, (invoice) => invoice.transactions)
    invoice: Invoice;

    @Column('decimal', { precision: 10, scale: 2 })
    transaction_amount: number;

    @Column({ type: 'enum', enum: PaymentStatusEnum })
    transaction_status: PaymentStatusEnum;

    @Column()
    reference_number: string;
}
