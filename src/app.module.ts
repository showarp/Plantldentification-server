import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/user.entity'
import { FilesController } from './files/files.controller';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    CatsModule, 
    UsersModule, 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Exam6918.',
    database: 'Plant',
    entities: [User],
    synchronize: true,
  }),
  FilesModule
],
  controllers: [AppController, FilesController],
  providers: [AppService],
})
export class AppModule {}
