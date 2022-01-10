import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddPaymentPlanDto, UpdatePaymentPlanDto } from './payment-plans.dto';
import { PaymentPlansModel } from './payment-plans.model';

@Injectable()
export class PaymentPlansService {
    constructor( @InjectModel("PaymentPlan") private readonly PaymentPlan : Model <PaymentPlansModel>) {}

    async addPaymentPlan (AddPaymentPlanDto : AddPaymentPlanDto) : Promise<PaymentPlansModel> {
        const { name, price, description, time} = AddPaymentPlanDto

        const newPaymentPlan = await this.PaymentPlan.create({
            name : name,
            price : price,
            description : description,
            time : time
        })
        return newPaymentPlan
    }


    async getAllPaymentPlans () : Promise<PaymentPlansModel[]>  {
        const allPaymentPlans = await this.PaymentPlan.find()
        return allPaymentPlans 
    }

    async UpdatePaymentPlan (planID : string, UpdatePaymentPlanDto : UpdatePaymentPlanDto) : Promise<PaymentPlansModel> {
        const { name, price, description, time} = UpdatePaymentPlanDto
  
        const update = {}
        if(name) {
            update["name"] = name
        }
        if(price) {
            update["price"] = price
        }
        if (description) {
            update["description"] = description
        }
        if (time) {
            update["time"] = time
        }
        const updatedPaymentPlan = await this.PaymentPlan.findByIdAndUpdate(planID, update, {new : true})
        if (!updatedPaymentPlan) {
            throw new HttpException({success: false , message : "User not found"}, 404)
        }
        return updatedPaymentPlan;
    }


    async seedPaymentPlan(AddPaymentPlanDto : AddPaymentPlanDto ) : Promise<PaymentPlansModel> {
        const { name, price, description, time} = AddPaymentPlanDto

        const newPaymentPlan = await this.PaymentPlan.create({
            name : name,
            price : price,
            description : description,
            time : time
        })
        return newPaymentPlan
    }
}
