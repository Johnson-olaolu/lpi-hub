import { IsString, IsNumber, IsOptional, IsDate  } from 'class-validator';


export class CreateUserDto {
    @IsString() firstName : string ;
    @IsString() lastName : string;
    @IsString() password : string;
    @IsString() userName: string;
    @IsString() email : string ;
    @IsString() phoneNum : string;
    @IsString() currentPlan : string ;
    @IsDate() timeUsed : Date;
}


export class UpdateUserDto {
    @IsString() @IsOptional() firstName: string;
    @IsString() @IsOptional() lastName: string;
    @IsString() @IsOptional() userName: string;
    @IsString() @IsOptional() phoneNum: string;
    @IsString() @IsOptional() email: string;
    @IsString() @IsOptional() password: string;
}

export class GetUserDto {
    @IsString() @IsOptional() username: string;
    @IsString() @IsOptional() phone: string;
    @IsString() @IsOptional() email: string;
}




// export class CreateUserDto {
//     @IsString() first_name: string;
//     @IsString() last_name: string;
//     @IsString() username: string;
//     @IsString() phone: string;
//     @IsString() email: string;
//     @IsString() password: string;
//     @IsString() @IsOptional() role: string;
// }


