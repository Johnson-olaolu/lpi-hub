import { Injectable } from "@nestjs/common";
import { Command } from "nestjs-command";
import { AddPaymentPlanDto } from "./payment-plans.dto";
import { PaymentPlansService } from "./payment-plans.service";


// @IsString() name : string;
//     @IsNumber() price : number;
//     @IsDate() time : Date;
//     @IsString() description : string;
const seedPaymentPlans = [
    {
        name : "iZone (Mini)",
        price : 8000,
        users : 1,
        time : new Date(0, 0, 0, 50, 0, 0, 0),
        description : "Up to 50hrs per month, Use Hub resources, Get invitations to events,  Advanced bookings needed, Free consultations, Subsidised training cost, Idea/Business Dev. Support, Mentorship ,Access to closed events"
    },
    {
        name : "iZone (Individual)",
        price : 12000,
        users: 1,
        time : new Date(0, 0, 0, 70, 0, 0, 0),
        description :"Up to 70hrs per month, Use Hub resources, Get invitations to events,  Advanced bookings needed, Free consultations, Subsidised training cost, Idea/Business Dev. Support, Mentorship ,Access to closed events"
    },
    {
        name : "iZone (Premium)",
        price : 22000,
        users : 1,
        time : new Date(0, 0, 0, 120, 0, 0, 0),
        description : "Dedicated Desk, Up to 120 hours per month, Use Hub resources, Get invitations to events, Advanced bookings needed, Free consultations, Subsidised training cost,Idea/Business Dev. Support, Mentorship,Access to closed events, Access to conference venue at subsidised rate"
    },
    {
        name : "iZone (Startup/Group)",
        price : 32000,
        users : 3,
        time : new Date(0, 0, 0, 210, 0, 0, 0),
        description : "Dedicated Desk, Up to 210 hours per month, Use Hub resources, Get invitations to events, Advanced bookings needed, Free consultations, Subsidised training cost,Idea/Business Dev. Support, Mentorship,Access to closed events"
    },
    
]


@Injectable()
export class PaymentPlanSeeder  {
    constructor(private readonly PaymentPlansService: PaymentPlansService) { }

    @Command({ command: 'seed:payment-plan', describe: "seed payment plans" })
    async seedAdmin() {
        for (const  paymentPlan of seedPaymentPlans) {
            const seededPaymentPlan  = await this.PaymentPlansService.seedPaymentPlan(paymentPlan)
            console.log(seededPaymentPlan)
        }
    }

}
