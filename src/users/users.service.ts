import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/entities/user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto.name, createUserDto.email);
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(email: string) {
    return this.users.find((user) => user.getEmail() === email);
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(email);
    user.setName(updateUserDto.name)
    user.setEmail(updateUserDto.email)
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
