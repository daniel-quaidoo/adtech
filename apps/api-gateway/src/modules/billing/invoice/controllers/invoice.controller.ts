import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Repository } from 'typeorm';
//entity
import { Invoice } from '../entities/invoice.entity';
import { InvoiceItem } from '../entities/invoice-item.entity';

//service
import { InvoiceService } from '../services/invoice.service';

//dto
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { InvoiceItemDto } from '../dto/invoice-item.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';

@Controller('')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService){}

    @Post()
    create(
        @Body() dto: CreateInvoiceDto,
    ){
        return this.invoiceService.createInvoice(dto);
    }

    @Get()
    findAll(){
        return this.invoiceService.findAll()
    }

    @Get(':invoiceId')
    findOne(
        @Param('invoiceId') invoiceId:string
    ){
        return this.invoiceService.findOne(invoiceId)
    }


    @Patch(':invoiceId')
    update(
        @Param('invoiceId') invoiceId: string,
        @Body() dto: UpdateInvoiceDto
    ){
        return this.invoiceService.updateInvoice(invoiceId, dto)
    }

    @Delete(':invoiceId')
    delete(
        @Param('invoiceId') invoiceId:string
    ){
        return this.invoiceService.delete(invoiceId)
    }
}