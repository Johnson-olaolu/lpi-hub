import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly User: Model<UserModel>) {}

  async addUser(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
  ) {
      const user = await this.User.create({
          firstName : firstName,
          lastName : lastName,
          userName : userName,
          password: password
      })
      return user;
  }

  async getAllUsers() {
    const users = await this.User.find();
    return users;
  }

  async updateUser (id : string, firstName : string, lastName : string , userName : string, password : string) {
    
        const user = await this.User.findByIdAndUpdate(id , {
            firstName : firstName,
            lastName : lastName,
            userName : userName, 
            password : password
        })

        return user;
  }
}
