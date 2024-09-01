import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './dto/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepositery: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepositery.save(createUserDto);
  }

  async findAll() {
    return await this.userRepositery.find();
  }

  async findOne(id_user: number) {
    const user = await this.userRepositery.findOneBy({ id_user });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id_user: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepositery.findOneBy({ id_user });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return await this.userRepositery.update(id_user, updateUserDto);
  }

  async remove(id_user: number) {
    const user = await this.userRepositery.findOneBy({ id_user });
    if (!user) {
      throw new NotFoundException('User not fond');
    }
    return await this.userRepositery.remove(user);
  }
}
