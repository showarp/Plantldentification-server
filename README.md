# 植物表型特征识别系统
该系统是一个nestjs构建后端react作为前端的系统，识别部分使用了 进行知识蒸馏以及集成学习之后的squeezenext模型，在模型大小不变的情况下大大提升了准确率。最后以onnx的形式导出并部署到网页端运行，减轻服务器负担。
## 系统整体设计框架
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/bac34e80-e20e-4e40-adac-a34d2eaf7044)  
我们的系统整体设计框架一共分为六层，分别是前端、展示层、业务层、数据层、数据库以及运行环境，我们将运行环境部署在服务器中。它们层层相扣，其中第N层依托有N-1层运行。

## 系统总体流程图
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/e09f7413-91cc-479e-befc-fd801658a80e)  
## 实现的功能
1. 植物种类识别————对图像或视频中的植物进行识别。
2. 病害种类识别————对图像或视频中的植物的病害种类进行识别
3. 措施建议————对病害识别的结果返回相对应的建议
4. 气象数据————显示相对应的地理信息
5. 病害对比————对历史识别结果进行筛选对比
6. 数据分析————可以对数据库中的数据导出分析
## 界面展示
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/6ca1a750-729e-47e6-a3b0-85a880ff685f)  
注册/登录界面  
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/7684edac-3cad-412b-988d-2bb4f7856085)  
图像识别界面  
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/e4ea58dd-6bde-4975-a1bf-41fa8423bb5c)  
网页端视频识别界面  
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/a8617721-f70f-4c44-9d17-1cab221190a1)  
识别记录  
![image](https://github.com/showarp/Plantldentification-server/assets/59379571/d49e5455-da65-49ca-8c9b-07f069a410c9)  
数据分析界面  



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

