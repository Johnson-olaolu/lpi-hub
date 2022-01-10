import { Injectable } from "@nestjs/common";
import { Command } from "nestjs-command";
import { UserService } from "./user.service";

const seedUsers = [
    {
        firstName: "Super",
        lastName: "Admin",
        password: "lpihub",
        userName: "super-admin",
        email: "superadmin@lpihub.com",
        phoneNum: "07053332295" , 
        role: "superAdmin",
        currentPlan: "Premium",
        timeUsed: new Date(new Date().getTime())
    }
]
@Injectable()
export class UserSeeder  {
    constructor(private readonly userService: UserService) { }

    @Command({ command: 'seed:user', describe: "seed super admin" })
    async seedAdmin() {
        for (const  user of seedUsers) {
            const seededUser  = await this.userService.seedUser(user)
            console.log(seededUser)
        }
    }

}
