import { Module } from '@nestjs/common';
import { PaymentLogsService } from './payment-logs.service';
import { PaymentLogsController } from './payment-logs.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { PaymentLogsSchema } from './payment-logs.model';

@Module({
  imports : [MongooseModule.forFeature([{name : "PaymentLogs", schema : PaymentLogsSchema}])],
  providers: [PaymentLogsService],
  controllers: [PaymentLogsController]
})
export class PaymentLogsModule {}
