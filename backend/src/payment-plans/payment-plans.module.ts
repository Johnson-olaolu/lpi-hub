import { Module } from '@nestjs/common';
import { PaymentPlansService } from './payment-plans.service';
import { PaymentPlansController } from './payment-plans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentPlansSchema } from './payment-plans.model';

@Module({
  imports : [MongooseModule.forFeature([{name : "PaymentPlan" , schema : PaymentPlansSchema}])],
  providers: [PaymentPlansService],
  controllers: [PaymentPlansController],
  exports : [PaymentPlansService]
})
export class PaymentPlansModule {}
