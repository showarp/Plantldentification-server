import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { join } from 'path';
const fs = require('fs')
const json2xls = require('json2xls')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  async getUsers(): Promise<User[]> {
    let All = await this.usersService.findAll();
    return All
  }
  @Post()
  async inserData(@Body() body): Promise<{message:string}> {
    await this.usersService.insert(body)
    let All = await this.usersService.findAll();
    let xls = json2xls(All);
    let xlsPath = join(__dirname, '../../', 'uploads', 'data.xlsx');
    fs.writeFileSync(xlsPath, xls, 'binary');
    return {message:"ok"}
  }
  @Get(':id')
  async remove(@Param() param): Promise<{message:string}>{
    const data:number[] = param.id.split('|').map((v:string,i)=>{return Number(v)})
    await this.usersService.delete(data)
    return {message:`success! remove ${param.id}`}
  }
}
