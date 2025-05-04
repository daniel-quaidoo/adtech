import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionController } from "./controllers/transaction.controller";
import { TransactionService } from "./services/transaction.service";
import { TransactionType } from "./entities/transaction-type.entity";
import { Transaction } from "./entities/transaction.entity";
import { Module } from "@nestjs/common";
import { TransactionTypeController } from "./controllers/transaction-type.controller";
import { TransactionTypeService } from "./services/transaction-type.service";
import { Invoice } from "../invoice/entities/invoice.entity";
import { PaymentModule } from "../payment/payment.module";
import { PaymentType } from "../payment/entities/payment-type.entity";


@Module({
    imports: [TypeOrmModule.forFeature([TransactionType, Transaction, Invoice]),PaymentModule],
    controllers: [TransactionController, TransactionTypeController],
    providers: [TransactionService, TransactionTypeService],
})

export class TransactionModule{}