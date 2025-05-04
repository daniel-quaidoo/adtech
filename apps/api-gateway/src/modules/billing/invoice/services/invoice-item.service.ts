import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InvoiceItem } from "../entities/invoice-item.entity";
import { Repository } from "typeorm";
import { Invoice } from "../entities/invoice.entity";
import { CreateInvoiceItemDto } from "@lib/contracts/billing/invoice/create-invoice-item.dto";
import { InvoiceItemDto } from "@lib/contracts/billing/invoice/invoice-item.dto";
import { UpdateInvoiceItemDto } from "@lib/contracts/billing/invoice/update-invoice-item.dto";


@Injectable()
export class InvoiceItemService{
    constructor(
        @InjectRepository(InvoiceItem) private invoiceItemRepo: Repository<InvoiceItem>,
        @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>
    ){}

    async addItemToInvoice(invoiceId:string, dto: CreateInvoiceItemDto): Promise<InvoiceItem>{
        const invoice = await this.invoiceRepo.findOneByOrFail({invoice_id: invoiceId})

        const item = this.invoiceItemRepo.create({
            ...dto,
            invoice,
            total_price: dto.unit_price * dto.quantity,
        });

        return this.invoiceItemRepo.save(item);
    }

    async getInvoiceItems(invoiceId:string): Promise<InvoiceItem[]>{
        return this.invoiceItemRepo.find({
            where: {invoice: {invoice_id: invoiceId}}
        });
    }

    async getInvoiceItem(invoiceId: string, itemId: string): Promise<InvoiceItem> {
        
        const invoiceItem = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });
    
        if (!invoiceItem) {
            throw new NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }
        return invoiceItem;
    }

    async updateInvoiceItem(invoiceId: string, itemId: string, dto: UpdateInvoiceItemDto): Promise<InvoiceItem> {
        const item = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });

        if (!item) {
            throw new NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }

        Object.assign(item, dto);
        if (dto.unit_price || dto.quantity) {
            item.total_price = (dto.unit_price ?? item.unit_price) * (dto.quantity ?? item.quantity);
        }

        return this.invoiceItemRepo.save(item);
    }

    async deleteInvoiceItem(invoiceId: string, itemId: string): Promise<void> {
         const item = await this.invoiceItemRepo.findOne({
            where: { invoice: { invoice_id: invoiceId }, invoice_item_id: itemId },
        });
    
        if (!item) {
            throw new NotFoundException('Invoice item not found or does not belong to the specified invoice');
        }
    
        await this.invoiceItemRepo.delete(itemId);
    }
    
}