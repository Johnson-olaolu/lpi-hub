import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class AddPaymentPlanDto {
    @IsString() name : string;
    @IsNumber() price : number;
    @IsDate() time : Date;
    @IsOptional() @IsNumber() users : number;
    @IsString() description : string;
}

export class UpdatePaymentPlanDto {
    @IsOptional() @IsString()  name : string;
    @IsOptional() @IsNumber() price : number;
    @IsOptional() @IsString()  description : string;
    @IsOptional() @IsString()  time : Date;
    @IsOptional() @IsNumber() users : number
}