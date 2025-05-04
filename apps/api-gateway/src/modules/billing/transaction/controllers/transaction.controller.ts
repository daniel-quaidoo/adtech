import { Controller, Post , Get, Delete, Param, Body} from "@nestjs/common";
import { TransactionService } from "../services/transaction.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateTransactionDto } from "../dto/create-transaction.dto";

@ApiTags('Transactions')
@Controller('')
export class TransactionController{
    constructor(
        private readonly transService: TransactionService
    ){}

    @Post()
    create(@Body() dto: CreateTransactionDto) {
        return this.transService.create(dto);
    }

    @Get()
    findAll() {
        return this.transService.findAll();
    }

    @Get(':transId')
    findOne(@Param('transId') transId: string) {
        return this.transService.findOne(transId);
    }

    @Delete(':transId')
    delete(@Param('transId') transId: string) {
        return this.transService.delete(transId);
    }
}