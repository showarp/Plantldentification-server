import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>文件上传示例</title>
      </head>
      <body>
        <h1>上传文件</h1>
        <form action="http://localhost:3000/files" method="POST" enctype="multipart/form-data">
          <input type="file" name="file">
          <br><br>
          <input type="submit" value="上传">
        </form>
      </body>
    </html>`;
  }
}
