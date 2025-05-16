import { BadRequestException, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { TransactionService } from "../../transaction/services/transaction.service";
import { ConfigService } from "@nestjs/config";
import { PaymentStatusEnum } from "@lib/contracts/billing/enums/payment-status.enum";
import { InitializePaymentDto } from "@lib/contracts/billing/payment/initialize-payment.dto";
import { PaymentTypeService } from "./payment-type.service";
import { InvoiceService } from "../../invoice/services/invoice.service";
import { TransactionTypeService } from "../../transaction/services/transaction-type.service";
import { TransactionTypeEnum } from "@lib/contracts/billing/enums/transaction-type.enum";
import { firstValueFrom } from "rxjs";
import { generateTransactionId } from "../../utils/transaction-id.utils";
import { PaymentChannelService } from "./payment-channel.service";


@Injectable()
export class PaymentService{
    constructor(
        private readonly httpService: HttpService,
        private readonly transactionService: TransactionService,
        private readonly paymentTypeService: PaymentTypeService,
        private readonly paymentChannelService: PaymentChannelService,
        private readonly invoiceService: InvoiceService,
        private readonly transactionTypeService: TransactionTypeService,
        private readonly configService: ConfigService
    ){}

    async intializePayment(dto: InitializePaymentDto){
        
        
        const invoice = await this.invoiceService.findOne(dto.invoiceId);

        if(invoice.status == PaymentStatusEnum.Paid || invoice.date_paid){
            throw new BadRequestException('This invoice has already been paid.');
        }

        const transactionType = await this.transactionTypeService.findOneByName(TransactionTypeEnum.Debit);


        const paystackPayload = {
            email: invoice.issued_to.email,
            amount: invoice.invoice_amount * 100,
        };

        const headers= {
            Authorization: `Bearer ${this.configService.get('PAYSTACK_SECRET_KEY')}`,
        };

        const response = await firstValueFrom(
            this.httpService.post('https://api.paystack.co/transaction/initialize', paystackPayload, { headers })
        );

        const paystackData = response.data.data;
            
        const transaction = await this.transactionService.create({
            transaction_id: generateTransactionId(),
            payment_type: null,
            payment_channel: null,
            transaction_date: new Date(),
            transaction_details: null,
            transaction_type:transactionType ,
            invoice: invoice,
            transaction_amount: invoice.invoice_amount,
            transaction_status: PaymentStatusEnum.Pending,
            reference_number: paystackData.reference,

        });

        return {
            status: 'success',
            authorization_url: paystackData.authorization_url,
            transaction_id: transaction.transaction_id,
            reference: paystackData.reference,
        };
    }


    async verifyPayment(reference: string) {
        const headers = {
          Authorization: `Bearer ${this.configService.get('PAYSTACK_SECRET_KEY')}`,
        };
      
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.paystack.co/transaction/verify/${reference}`, { headers })
            );
        
            const paystackData = response.data.data;
            if (!paystackData) throw new Error("Invalid response from Paystack");
        

            const transPaymentType = paystackData.authorization?.channel?.toLowerCase() || 'unknown';
            const transPaymentChannel = paystackData.authorization?.brand || 'unknown';


            const paymentType = await this.paymentTypeService.findOrCreateByName(transPaymentType);
            const paymentChannel = await this.paymentChannelService.findOrCreateByName(transPaymentChannel);
        
            // SUCCESSFUL PAYMENT FLOW
            if (paystackData.status === 'success') {
                const transaction = await this.transactionService.updateWithPaymentInfo(reference, {
                    status: PaymentStatusEnum.Paid,
                    payment_type: paymentType,
                    payment_channel: paymentChannel,
                });

                if (!transaction.invoice) {
                    throw new Error('Transaction is not linked to an invoice.');
                }
        
                // Update invoice date_paid and status
                if (paystackData.paid_at) {
                    await this.invoiceService.updateStatusAndDatePaid(
                        transaction.invoice.invoice_id, 
                        PaymentStatusEnum.Paid,
                        new Date(paystackData.paid_at));
                }
        
                return {
                    success: true,
                    message: 'Payment Successful',
                    paystackData,
                };
            }
      
            //  UNSUCCESSFUL PAYMENT FLOW
            await this.transactionService.updateWithPaymentInfo(reference, {
                status: PaymentStatusEnum.Unpaid,
                payment_type: paymentType,
                payment_channel: paymentChannel,
            });

        
            return {
                success: false,
                message: 'Payment Failed or Not Completed',
                paystackData,
            };
            } catch (error) {
                console.log(error.message);
            throw new Error(
                
                `Paystack verification error: ${error?.response?.data?.message || error.message || 'Unknown error'}`
                
            );
            
            }
            
      }      
      
}

