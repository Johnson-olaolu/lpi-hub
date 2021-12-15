import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // desc: get all students
  // route :GET api/student
  @Get()
  async getAllStudent() {
    return await this.userService.getAllUsers();
  }

  // desc: add new student
  // route :POST  api/student
  @Post()
  async addNewStudent(@Body() CreateUserDto : CreateUserDto ) {
    return await this.userService.addUser(CreateUserDto );
  }

  // desc: update student
  // route : PATCH  api/student/:id
  @Put('/:id')
  async updateUser(
    @Param('id') userID: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('userName') userName: string,
    @Body('password') password: string,
  ) {
      return this.userService.updateUser(userID, firstName, lastName, userName, password)
  }
}
