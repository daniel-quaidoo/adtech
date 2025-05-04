import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//entity
import { Invoice } from './entities/invoice.entity';
import { InvoiceItem } from './entities/invoice-item.entity';

//controllers
import { InvoiceItemController } from './controllers/invoice-item.controller';
import { InvoiceController } from './controllers/invoice.controller';

//services
import { InvoiceItemService } from './services/invoice-item.service';
import { InvoiceService } from './services/invoice.service';


@Module({
    imports: [TypeOrmModule.forFeature([Invoice, InvoiceItem])],
    controllers: [InvoiceController, InvoiceItemController],
    providers: [InvoiceService, InvoiceItemService],
})
export class InvoiceModule {}