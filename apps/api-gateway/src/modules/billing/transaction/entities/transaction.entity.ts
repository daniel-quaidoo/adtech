import { Column, Entity, Index, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PaymentType } from "../../payment/entities/payment-type.entity";

import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";
import { TransactionType } from "./transaction-type.entity";
import { Invoice } from "../../invoice/entities/invoice.entity";
import { PaymentChannel } from "../../payment/entities/payment-channel.entity";


@Entity('transaction')
export class Transaction {
    
    @PrimaryColumn()
    transaction_id: string;

    // @Index()
    // @Column()
    // transaction_number: string;
    
    @ManyToOne(() => PaymentType, { nullable : true, eager: true })
    payment_type: PaymentType;

    @ManyToOne(() => PaymentChannel, { nullable : true, eager: true })
    payment_channel: PaymentChannel;

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
