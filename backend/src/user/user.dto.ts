import { IsString, IsNumber, IsOptional  } from 'class-validator';


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

export class CreateUserDto {
    @IsString() firstName : string ;
    @IsString() lastName : string;
    @IsString() password : string;
    @IsString() userName: string;
    @IsString() email : string ;
    @IsString() role : string ;
    @IsString() currentPlan : string ;
    @IsString() timeUsed : string;
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

// export class GetUserDto {
//     @IsString() @IsOptional() username: string;
//     @IsString() @IsOptional() phone: string;
//     @IsString() @IsOptional() email: string;
// }
