import * as bcrypt from 'bcryptjs'
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserModel } from './user.model';
import { RoleModel } from 'src/role/role.model';

@Injectable()
export class UserService {
	constructor(
		@InjectModel('User') private readonly User: Model<UserModel>,
		@InjectModel('Role') private readonly Role: Model<RoleModel>
	) { }

	async addUser(CreateUserDto: CreateUserDto) : Promise<UserModel> {
		const { firstName, lastName, password, email, currentPlan, timeUsed, phoneNum, userName } = CreateUserDto
		const fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const lname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		const pass = bcrypt.hashSync(password, 10);
		const phone = '+234' + phoneNum.slice(1);
		const role = await this.Role.findOne({name : "user"})
		const newUser = await this.User.create({
			firstName: fname,
			lastName: lname,
			password: pass,
			email: email,
			currentPlan: currentPlan,
			timeUsed: timeUsed,
			userName: userName,
			phoneNum : phone,
			role : role._id
		})

		if (!newUser) {
			throw new HttpException(
				{ success: false, message: "user not created" },
				404
			)
		}

		return newUser 
	}

	async getAllUsers() : Promise<UserModel[]> {
		const role = await this.Role.findOne({name : "user"})
		const users = await this.User.find({role : role._id});
		return users  
	}

	async getUser( id: string) : Promise <UserModel> {
		const user = await this.User.findById(id)
		return user 
	}

	async updateUser(id: string, UpdateUserDto : UpdateUserDto) : Promise <UserModel> {
		const {firstName, lastName, userName , password, email, phoneNum} = UpdateUserDto
		const fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const lname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		const pass = bcrypt.hashSync(password, 10);
		const phone = '+234' + phoneNum.slice(1);
		const user = await this.User.findByIdAndUpdate(id, {
			firstName: fname,
			lastName: lname,
			userName: userName,
			password: pass,
			email : email,
			phoneNum :phone
		})

		return user;
	}

	async deleteUser(id:string) {
		try {
			await this.User.findByIdAndDelete(id)
		} catch (error) {
			throw new HttpException({success: "false" , message : "could not delete User"}, 500)
		}
	} 

	async addAdmin (CreateUserDto : CreateUserDto) : Promise <UserModel> {
		const { firstName, lastName, password, email, currentPlan, timeUsed, phoneNum, userName } = CreateUserDto
		const fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const lname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		const pass = bcrypt.hashSync(password, 10);
		const phone = '+234' + phoneNum.slice(1);
		const role = await this.Role.findOne({name : "admin"})
		const newAdmin = await this.User.create({
			firstName: fname,
			lastName: lname,
			password: pass,
			email: email,
			role : role._id, 
			currentPlan: currentPlan,
			timeUsed: timeUsed,
			userName: userName,
			phoneNum : phone
		})

		if (!newAdmin) {
			throw new HttpException(
				{ success: false, message: "user not created" },
				404
			)
		}

		return newAdmin
	}

	async getAllAdmin () : Promise <UserModel[]> {
		const role = await this.Role.findOne({name : "admin"})
		const admins = await this.User.find({role : role._id})
		return admins 
	}

	async getAdmin (id : string): Promise<UserModel> {
		const role = await this.Role.findOne({name : "admin"})
		const admin = await this.User.findOne({id : id , role : role._id})
		if(!admin) {
			throw new HttpException({success: "false" , message : "could not get admin"}, 404)
		}
		return admin
	}

	async updateAdmin(id : string , UpdateUserDto : UpdateUserDto) : Promise<UserModel> {
		const {firstName, lastName, userName , password, email, phoneNum} = UpdateUserDto
		const fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		const lname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
		const pass = bcrypt.hashSync(password, 10);
		const phone = '+234' + phoneNum.slice(1);
		const admin = await this.User.findByIdAndUpdate(id, {
			firstName: fname,
			lastName: lname,
			userName: userName,
			password: pass,
			email : email,
			phoneNum :phone
		})

		return admin;
	}

	async deleteAdmin (id : string) {
		try {
			await this.User.findByIdAndDelete(id)
		} catch (error) {
			throw new HttpException({success: "false" , message : "could not delete admin"}, 500)
		}
	}

	async seedUser(CreateUserDto: CreateUserDto) {
		const { firstName, lastName, password, email, phoneNum, currentPlan, timeUsed, userName } = CreateUserDto
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
				role: "superAdmin",
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
