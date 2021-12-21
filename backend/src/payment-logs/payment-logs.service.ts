import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddPaymentToLogDto, GetUserPaymentLogsDto } from './payment-logs.dto';
import { PaymentLogsModel } from './payment-logs.model';

@Injectable()
export class PaymentLogsService {
    constructor(@InjectModel("PaymentLogs")  private PaymentLogs : Model<PaymentLogsModel> ) {}

    async addPaymentToLog ( AddPaymentToLogDto : AddPaymentToLogDto) {
        const { userID, paymentPlanID, recieptID } = AddPaymentToLogDto

        const newPayment = await this.PaymentLogs.create({
            userID : userID,
            paymentPlanID: paymentPlanID,
            recieptID : recieptID
        })

        if(!newPayment) {
            throw new HttpException({success : false , message : "could not add new payment"}, 404)
        }
        return {id : newPayment._id, userID : newPayment.userID, paymentPlanID : paymentPlanID, recieptID : recieptID } as PaymentLogsModel
    }

    async GetAllPaymentLogs ( ) {
        const AllPayments = await this.PaymentLogs.find() 
        return AllPayments as PaymentLogsModel[];
    }

    async GetPaymentLogByID ( GetUserPaymentLogsDto : GetUserPaymentLogsDto ) {
        const {userID } = GetUserPaymentLogsDto

        const userPaymentLogs = await this.PaymentLogs.find({userID : userID }).exec()
        return userPaymentLogs as PaymentLogsModel[];
    }
}
