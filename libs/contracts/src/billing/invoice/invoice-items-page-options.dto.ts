
// libs/contracts/src/billing/invoice/dto/invoice-page-options.dto.ts
import { PageOptionsDto } from '@app/common/dto/page-meta/page-optional.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PaymentStatusEnum } from '../enums/payment-status.enum';

export class InvoiceItemsPageOptionsDto extends PageOptionsDto {

  readonly orderBy: string = 'total_price';
}
