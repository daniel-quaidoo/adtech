import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentController } from "./controllers/payment.controller";
import { PaymentService } from "./services/payment.service";
import { PaymentType } from "./entities/payment-type.entity";
import { PaymentTypeController } from "./controllers/payment-type.controller";
import { PaymentTypeService } from "./services/payment-type.service";
import { HttpModule } from "@nestjs/axios";
import { TransactionService } from "../transaction/services/transaction.service";
import { InvoiceService } from "../invoice/services/invoice.service";
import { ConfigService } from "@nestjs/config";
import { TransactionTypeService } from "../transaction/services/transaction-type.service";
import { TransactionModule } from "../transaction/transaction.module";
import { InvoiceModule } from "../invoice/invoice.module";
import { PaymentChannelController } from "./controllers/payment-channel.controller";
import { PaymentChannelService } from "./services/payment-channel.service";
import { PaymentChannel } from "./entities/payment-channel.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentType, PaymentChannel]),
        HttpModule,
        forwardRef(() => TransactionModule),
        forwardRef(() => InvoiceModule),
    ],
    controllers: [PaymentController, PaymentTypeController, PaymentChannelController],
    providers: [
        PaymentService, 
        PaymentTypeService,
        PaymentChannelService,
        ConfigService,
    ],
    exports: [PaymentService, PaymentTypeService ,PaymentChannelService, TypeOrmModule]
})
export class PaymentModule {}