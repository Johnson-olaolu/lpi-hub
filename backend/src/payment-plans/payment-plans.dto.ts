import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class AddPaymentPlanDto {
    @IsString() name : string;
    @IsNumber() price : number;
    @IsDate() time : Date;
    @IsString() description : string;
}

export class UpdatePaymentPlanDto {
    @IsString() @IsOptional() name : string;
    @IsNumber() @IsOptional() price : number;
    @IsString() @IsOptional() description : string;
    @IsString() @IsDate() time : string;
}