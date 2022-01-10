import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	// desc: get all users
	// route :GET api/user
	@Get()
	async getAllUsers() {
		return await this.userService.getAllUsers();
	}

	// desc: add new user
	// route :POST  api/user
	@Post()
	async addNewUser(@Body() CreateUserDto: CreateUserDto) {
		return await this.userService.addUser(CreateUserDto);
	}

	// desc: update user
	// route : PUT  api/user/:id
	@Put('/:id')
	async updateUser(
		@Param('id') userID: string,
		@Body() UpdateUserDto : UpdateUserDto
	) {
		return this.userService.updateUser(userID, UpdateUserDto)
	}

	// desc: delete user
	// route : DELETE  api/user/:id
	@Delete("/:id")
	async deleteUSer(
		@Param('id') userID: string
	) {
		return ""
	}
}
