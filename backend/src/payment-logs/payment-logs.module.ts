import { Module } from '@nestjs/common';
import { PaymentLogsService } from './payment-logs.service';
import { PaymentLogsController } from './payment-logs.controller';

@Module({
  providers: [PaymentLogsService],
  controllers: [PaymentLogsController]
})
export class PaymentLogsModule {}
