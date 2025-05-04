import { InvoiceDto } from './invoice.dto';


export class InvoiceItemDto {

    invoice_item_id: string;
    invoice: InvoiceDto;
    quantity: number;
    unit_price: number;
    total_price?: number;
    description: string;
    reference_id: string;
}