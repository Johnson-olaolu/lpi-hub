import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RoleSchema } from "src/role/role.model";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.model";
import { UserService } from "./user.service";

@Module({
    imports : [MongooseModule.forFeature([
        {name : "User", schema : UserSchema},
        {name : "Role", schema : RoleSchema},
    ])],
    controllers : [UserController],
    providers : [UserService],
    exports : [UserService]
})
export class UserModule {}