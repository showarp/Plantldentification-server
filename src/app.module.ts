import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/user.entity'
import { FilesController } from './files/files.controller';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    UsersModule,
    FilesModule
],
  controllers: [AppController, FilesController],
  providers: [AppService],
})
export class AppModule {}
