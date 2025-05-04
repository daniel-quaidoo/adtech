import { IsInt, IsNumber, IsUUID } from "class-validator";

export class InitializePaymentDto {
    @IsUUID()
    invoiceId: string;
  
    @IsNumber()
    amount: number;
  
    @IsInt()
    paymentTypeId: number;
  }
  