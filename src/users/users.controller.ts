import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

const data = {name: 'yst', disease: 'jk', lng: 0.01, lat: 0.123, outPutData: '[1,2,3,4]', imgName: '1.jpg' }

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  @Post()
  async inserData(@Body() body): Promise<string> {
    await this.usersService.insert(body)
    return 'ok'
  }
  @Get(':id')
  async remove(@Param() param): Promise<string>{
    await this.usersService.delete({id:param.id})
    return `success! remove ${param.id}`
  }
}
