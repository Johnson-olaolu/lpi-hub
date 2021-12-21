import * as mongoose from 'mongoose'

export const PaymentPlansSchema = new mongoose.Schema({
    name : {
        type: String, 
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required : true
    }
})


export interface PaymentPlansModel extends mongoose.Document {
    _id : string;
    name : string;
    price : number;
    description : string;
    time : Date; 
}