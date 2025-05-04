import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { InvoiceItemService } from '../services/invoice-item.service';
import { CreateInvoiceItemDto } from '../dto/create-invoice-item.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateInvoiceItemDto } from '../dto/update-invoice-item.dto';

@ApiTags('Invoice-items')
@Controller('/:invoiceId/items')
export class InvoiceItemController {

    constructor(private readonly itemService:InvoiceItemService) {}

    @Post()
    create(
        @Param('invoiceId') invoiceId:string,
        @Body() dto: CreateInvoiceItemDto,
    ){
        return this.itemService.addItemToInvoice(invoiceId,dto);
    }

    @Get()
    findAll(
        @Param('invoiceId') invoiceId:string,
    ){
        return this.itemService.getInvoiceItems(invoiceId)
    }

    @Get(':itemId')
    findOne(
        @Param('invoiceId') invoiceId: string,
        @Param('itemId') itemId:string,
    ){
        return this.itemService.getInvoiceItem(invoiceId,itemId)
    }
    
    @Patch(':itemId')
    update(
        @Param('invoiceId') invoiceId: string,
        @Param('itemId') itemId: string,
        @Body() dto: UpdateInvoiceItemDto
    ){
        return this.itemService.updateInvoiceItem(invoiceId,itemId, dto)
    }

    @Delete(':itemId')
    remove(@Param('itemId') itemId: string, @Param('invoiceId') invoiceId: string,) {
      return this.itemService.deleteInvoiceItem(invoiceId,itemId);
    }

}