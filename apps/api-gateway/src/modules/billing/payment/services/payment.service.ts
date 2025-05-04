import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { TransactionService } from "../../transaction/services/transaction.service";
import { ConfigService } from "@nestjs/config";
import { InitializePaymentDto } from "../../invoice/dto/initialize-payment.dto";
import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";


@Injectable()
export class PaymentService{
    constructor(
        private readonly httpService: HttpService,
        private readonly transactionService: TransactionService,
        private readonly configService: ConfigService
    ){}

    async intializePayment(invoiceId:string, dto: InitializePaymentDto){
        const transaction = await this.transactionService.create({
            invoice,
            payment_type: dto.paymentTypeId,
            transaction_amount: dto.amount,
            transaction_status: PaymentStatusEnum.Pending

        })
    }
}

// transaction_number: dto.transaction_number,
// transaction_date: new Date(dto.transaction_date),
// transaction_details: dto.transaction_details,
// transaction_amount: dto.transaction_amount,
// transaction_status: dto.transaction_status,
// reference_number: dto.reference_number,
// invoice,
// payment_type: paymentType,
// transaction_type: transType,