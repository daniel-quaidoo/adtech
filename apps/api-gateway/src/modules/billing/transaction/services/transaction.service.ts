import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "../entities/transaction.entity";
import { Repository } from "typeorm";
import { PaymentType } from "../../payment/entities/payment-type.entity";
import { TransactionType } from "../entities/transaction-type.entity";
import { Invoice } from "../../invoice/entities/invoice.entity";
import { CreateTransactionDto } from "@lib/contracts/billing/transaction/create-transaction.dto";



@Injectable()
export class TransactionService{
    constructor(
        @InjectRepository(Transaction) private readonly transRepo: Repository<Transaction>,
        @InjectRepository(PaymentType) private readonly paymentTypeRepo: Repository<PaymentType>,
        @InjectRepository(TransactionType) private readonly transTypeRepo: Repository<TransactionType>,
        @InjectRepository(Invoice) private readonly invoiceRepo: Repository<Invoice>,
    ){}

    async create(dto: CreateTransactionDto): Promise< Transaction>{
        const paymentType = await this.paymentTypeRepo.findOneByOrFail({payment_type_id: dto.payment_type.payment_type_id})
        const transType = await this.transTypeRepo.findOneByOrFail({transaction_type_id: dto.transaction_type.transaction_type_id})
        const invoice = await this.invoiceRepo.findOneByOrFail({invoice_id: dto.invoice.invoice_id})

        const transaction = this.transRepo.create({
            transaction_number: dto.transaction_number,
            transaction_date: new Date(dto.transaction_date),
            transaction_details: dto.transaction_details,
            transaction_amount: dto.transaction_amount,
            transaction_status: dto.transaction_status,
            reference_number: dto.reference_number,
            invoice,
            payment_type: paymentType,
            transaction_type: transType,
        })

        return this.transRepo.save(transaction);
    }

    async findAll(): Promise<Transaction[]>{
        return this.transRepo.find({relations:['invoice', 'payment_type', 'transaction_type']})
    }

    async findOne(transId:string): Promise<Transaction>{
        return this.transRepo.findOne({
            where: { transaction_id: transId },
            relations: ['invoice', 'payment_type', 'transaction_type'],
          });
    }

    async delete(transId: string): Promise<void> {
        await this.transRepo.delete(transId);
    }
} 