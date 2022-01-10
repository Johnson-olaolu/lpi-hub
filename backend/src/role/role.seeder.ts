import { Injectable } from "@nestjs/common";
import { Command } from "nestjs-command";
import { RoleService } from "./role.service";



const seedRoles = [
    {
        name : "superAdmin",
        description : "super admin"
    },
    {
        name : "admin",
        description : "admin"
    },
    {
        name : "user",
        description :"normal user"
    }
]


@Injectable()
export class RoleSeeder  {
    constructor(private readonly roleService : RoleService) { }

    @Command({ command: 'seed:roles', describe: "seed roles" })
    async seedRole() {
        for (const  role of seedRoles) {
            const seededRole  = await this.roleService.seedRole(role)
            console.log(seededRole)
        }
    }

}
