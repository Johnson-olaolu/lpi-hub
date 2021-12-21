import * as mongoose from 'mongoose'

export const PaymentLogsSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    paymentPlanID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "PaymentPlan",
        required : true
    },
    recieptID : {
        type : String,
        required : true
    }
}, {timestamps : true})


export interface PaymentLogsModel extends mongoose.Document {
    readonly _id  : string
    readonly userID : string;
    readonly paymentPlanID : string;
    readonly recieptID : string;
}