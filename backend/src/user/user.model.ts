import * as mongoose from 'mongoose'

export const UserSchema  = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String , 
        required : true
    },
    userName : {
        type : String, 
        required : true
    }, 
    email : {
        type : String ,
        required : true
    },
    role : {
        type : String,
        required : false,
        default : "Student"
    },
    currentPlan : {
        type : String,
        required : true ,
        default : "basic"
    },
    timeUsed : {
        type : String,
        required : true,
    }
})

export interface UserModel {
    firstName : string;
    lastName : string;
    password : string;
    userName : string;
    email : string;
    role : string;
    currentPlan : string;
    timeUsed : string;
}