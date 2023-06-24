import { Module } from '@nestjs/common';
import { FilesController } from './files.controller'
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
      MulterModule.register({
        dest: './uploads', // 上传的文件将被保存在该目录下
      }),
    ],
    controllers: [FilesController],
  })
export class FilesModule {}
