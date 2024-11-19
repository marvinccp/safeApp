import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('safe/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    if (!users) throw new NotFoundException('Not found');
    return users;
  }

  @Post()
  async create(@Body() bodyDataCreate: CreateUserDto): Promise<User> {
    const newUser = await this.userService.create(bodyDataCreate);
    return newUser;
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    const user = this.userService.findOne(id);
    return user;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() bodyDataUpdate: UpdateUserDto) {
    return this.userService.update(id, bodyDataUpdate);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
