import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
//entity
import { Invoice } from '../entities/invoice.entity';
import { InvoiceItem } from '../entities/invoice-item.entity';
import { CreateInvoiceDto } from "@lib/contracts/billing/invoice/create-invoice.dto";
import { UpdateInvoiceDto } from "@lib/contracts/billing/invoice/update-invoice.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class InvoiceService{
    constructor(
        @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>
    ){}

    async createInvoice(dto: CreateInvoiceDto): Promise<Invoice>{
        const invoice = this.invoiceRepo.create(dto);
        return this.invoiceRepo.save(invoice)
    }

    async findAll(): Promise<Invoice[]>{
        return this.invoiceRepo.find({relations: ['items']});
    }

    async findOne(invoiceId:string): Promise<Invoice>{
        return this.invoiceRepo.findOneOrFail({
            where: {invoice_id: invoiceId},
            relations: [ 'items']
        })
    }

    async updateInvoice(invoiceId:string, dto: UpdateInvoiceDto): Promise<Invoice>{
        await this.invoiceRepo.update({ invoice_id: invoiceId }, dto);
        return this.findOne(invoiceId);
    }

    async delete(invoiceId:string): Promise<void>{
        await this.invoiceRepo.delete({invoice_id: invoiceId})
    }
}