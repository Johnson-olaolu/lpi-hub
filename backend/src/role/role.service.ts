import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addRoleDto } from './role.dto';
import { RoleModel } from './role.model';

@Injectable()
export class RoleService {
    constructor(@InjectModel("Role") private Role : Model<RoleModel>) {}

    async seedRole (addRoleDto : addRoleDto) {
        const {name, description} = addRoleDto
        const role = await this.Role.create({
            name : name,
            description : description
        })
        return role
    }
}
