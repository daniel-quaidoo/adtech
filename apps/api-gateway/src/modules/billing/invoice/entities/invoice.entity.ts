import { InvoiceTypeEnum } from "@lib/contracts/billing/enums/invoice-type.enum";
import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceItem } from "./invoice-item.entity";
import { User } from "../../../auth/users/entities/user.entity";
import { Transaction } from "../../transaction/entities/transaction.entity";


@Entity('invoice')
export class Invoice{

    @PrimaryGeneratedColumn('uuid')
    invoice_id: string;

    @Column()
    invoice_number: string;

    @ManyToOne(() => User, { eager: true })
    issued_by: User;
  
    @ManyToOne(() => User, { eager: true })
    issued_to: User;

    @Column()
    invoice_details: string;

    @Column('decimal', { precision: 10, scale: 2 } )
    invoice_amount: number;

    @Column()
    due_date:Date;

    @Column({nullable: true})
    date_paid:Date;

    @Column({ type: 'enum', enum: InvoiceTypeEnum })
    invoice_type: InvoiceTypeEnum;

    @Column({ type: 'enum', enum: PaymentStatusEnum, default: PaymentStatusEnum.Pending })
    status: PaymentStatusEnum;


    @OneToMany(() => InvoiceItem, (item) => item.invoice, {cascade:true})
    items : InvoiceItem[]

    @OneToMany(() => Transaction, (transaction) => transaction.invoice)
    transactions : Transaction[]

}