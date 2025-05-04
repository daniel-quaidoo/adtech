import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';

//modules

import { InvoiceModule } from './invoice/invoice.module';
import { PaymentModule } from './payment/payment.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    InvoiceModule,
    PaymentModule,
    TransactionModule,
  ],
  controllers: [ BillingController],
  providers: [BillingService]
})
export class BillingModule {}
