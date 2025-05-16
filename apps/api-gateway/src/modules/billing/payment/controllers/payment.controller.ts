import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PaymentService } from "../services/payment.service";
import { ApiTags } from "@nestjs/swagger";
import { InitializePaymentDto } from "@lib/contracts/billing/payment/initialize-payment.dto";
import { VerifyPaymentDto } from "../dto/verify-payment.dto";

@ApiTags('Payment Paystack')
@Controller()
export class PaymentController{
    constructor(
        private readonly paymentService: PaymentService
    ){}

    @Post('initialize')
    async intializePaymet(@Body() dto: InitializePaymentDto){
        return this.paymentService.intializePayment(dto)
    }

    @Get('paystack/callback')
    async handlePaystackcallback(@Query('reference') reference: string){
        return this.paymentService.verifyPayment(reference);
    }


}