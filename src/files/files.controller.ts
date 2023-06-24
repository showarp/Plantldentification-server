import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Response as ExpressResponse } from 'express';

@Controller('files')
export class FilesController {
    @Post()
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const extension = extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix + extension);
          },
        }),
      }),
    )
    uploadFile(@UploadedFile() file) {
      console.log(file);
      return { message: '文件上传成功', filename: file.filename };
    }
    @Get(':filename')
    getFile(@Param('filename') filename: string, @Res() res: ExpressResponse) {
        const imagePath = join(__dirname, '../../', 'uploads', filename); // 生成图片的完整路径
        return res.sendFile(imagePath);
    }
}
