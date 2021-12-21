import * as bcrypt from 'bcryptjs'
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
	constructor(@InjectModel('User') private readonly User: Model<UserModel>) { }

	async addUser(CreateUserDto: CreateUserDto) {
		const { firstName, lastName, password, email, currentPlan, role, timeUsed, userName } = CreateUserDto

		const newUser = await this.User.create({
			firstName: firstName,
			lastName: lastName,
			password: password,
			email: email,
			currentPlan: currentPlan,
			role: role,
			timeUsed: timeUsed,
			userName: userName
		})

		if (!newUser) {
			throw new HttpException(
				{ success: false, message: "user not created" },
				404
			)
		}

		return newUser as UserModel;
	}

	async getAllUsers() {
		const users = await this.User.find();
		return users as UserModel[];
	}



	async updateUser(id: string, firstName: string, lastName: string, userName: string, password: string) {
		const user = await this.User.findByIdAndUpdate(id, {
			firstName: firstName,
			lastName: lastName,
			userName: userName,
			password: password
		})

		return user;
	}

	async seedUser(CreateUserDto: CreateUserDto) {
		const { firstName, lastName, password, email, phoneNum, currentPlan, role, timeUsed, userName } = CreateUserDto
		const fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const lname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		const pass = bcrypt.hashSync(password, 10);
		const phone = '+234' + phoneNum.slice(1);
		try {
			const result = new this.User({
				firstName: fname,
				lastName: lname,
				password: pass,
				email: email,
				phoneNum : phone,
				currentPlan: currentPlan,
				role: role,
				timeUsed: timeUsed,
				userName: userName
			})
			const seededUser = await result.save()
			return {
				id: seededUser.id,
				firstName: seededUser.firstName,
				lastName: seededUser.lastName,
				password: seededUser.password,
				email: seededUser.email,
				currentPlan: seededUser.currentPlan,
				role: seededUser.role,
				timeUsed: seededUser.timeUsed,
				userName: seededUser.userName
			} as UserModel
		} catch (error) {
			console.log(error)
		}
	}
}
