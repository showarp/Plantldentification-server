import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
const DATABASE_CONFIG:TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Exam6918.',
  database: 'Plant',
  entities: [User],
  synchronize: true,
}
@Module({
  imports: [TypeOrmModule.forRoot(DATABASE_CONFIG),TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}