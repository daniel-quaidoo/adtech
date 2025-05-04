import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentController } from "./controllers/payment.controller";
import { PaymentService } from "./services/payment.service";
import { PaymentType } from "./entities/payment-type.entity";
import { PaymentTypeController } from "./controllers/payment-type.controller";
import { PaymentTypeService } from "./services/payment-type.service";

@Module({
    imports: [TypeOrmModule.forFeature([PaymentType])],
    controllers: [PaymentController, PaymentTypeController],
    providers: [PaymentService, PaymentTypeService],
    exports: [PaymentService, PaymentTypeService , TypeOrmModule]
})
export class PaymentModule {}