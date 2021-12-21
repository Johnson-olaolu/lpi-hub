import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNum : {
        type : String,
        required : true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    },
    currentPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CurrentPlan"
    },
    timeUsed: {
        type: Date,
        required: true,
    },
}, { timestamps: true },
)


UserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    const newObject = {
      id: _id,
      ...object,
    };
    return newObject;
  });

export class UserModel extends mongoose.Document {
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly userName: string;
    readonly email: string;
    readonly phoneNum : string;
    readonly password: string;
    readonly currentPlan: string;
    readonly timeUsed : string;
    readonly role : string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}