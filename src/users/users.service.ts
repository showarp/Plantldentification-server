import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: FindOneOptions<User>): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async delete(id: {id:number}): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async insert(data:{name: string,disease: string,lng:number,lat:number,outPutData:string,imgName:string}): Promise<void> {
    await this.usersRepository.insert(data)
  }
}