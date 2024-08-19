import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.userService.createUser(email, password);
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
