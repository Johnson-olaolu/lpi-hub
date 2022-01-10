import { IsString } from "class-validator";

export class addRoleDto  {
    @IsString() name : string
    @IsString() description  : string
}