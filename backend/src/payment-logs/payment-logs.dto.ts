import { IsString } from "class-validator";


export class AddPaymentToLogDto {
    @IsString() userID : string;
    @IsString() paymentPlanID : string;
    @IsString() recieptID : string;
}


export class GetUserPaymentLogsDto {
    @IsString() userID : string;
}