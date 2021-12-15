import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly User: Model<UserModel>) {}

  async addUser ( CreateUserDto : CreateUserDto) {
      const {firstName, lastName, password, email , currentPlan, role, timeUsed, userName } = CreateUserDto

      const newUser = await this.User.create({
        firstName :firstName,
        lastName : lastName,
        password : password,
        email : email,
        currentPlan : currentPlan,
        role : role,
        timeUsed : timeUsed,
        userName : userName
      })

      if(!newUser) {
          throw new HttpException(
            {success: false , message : "user not created"},
            404
          )
      }

      return newUser;
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

  async seedUser () {
    const seededUsers = await this.User.create({

    })
  }
}
