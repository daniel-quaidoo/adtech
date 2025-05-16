import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./invoice.entity";


@Entity('invoice_item')
export class InvoiceItem{
    @PrimaryGeneratedColumn('uuid')
    invoice_item_id: string;

    @ManyToOne(() => Invoice, (invoice) => invoice.items)
    @JoinColumn({ name: 'invoice_number' })
    invoice: Invoice;

    @Column()
    quantity: number;

    @Column('decimal', { precision: 10, scale: 2 } )
    unit_price: number;

    @Column('decimal', { precision: 10, scale: 2 } )
    total_price: number;

    @Column()
    description: string;
    
    @Column({nullable: true})
    reference_id: string;
}