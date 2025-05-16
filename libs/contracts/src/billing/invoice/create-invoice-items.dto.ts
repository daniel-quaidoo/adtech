import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateInvoiceItemDto } from "./create-invoice-item.dto";


export class CreateInvoiceItemsDto{

    @ApiProperty({type: [CreateInvoiceItemDto]})
    @ValidateNested({each: true})
    @Type(()=> CreateInvoiceItemDto)
    items: CreateInvoiceItemDto[];
}