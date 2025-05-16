import { InvoiceDto } from './invoice.dto';


export class CreateInvoiceItemDto {
    // invoice: InvoiceDto;
    quantity: number;
    unit_price: number;
    total_price?: number;
    description: string;
    reference_id?: string;
}