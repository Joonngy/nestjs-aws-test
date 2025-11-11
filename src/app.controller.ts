import { Body, Controller, Get, Ip, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealthCheck() {
    return this.appService.getHealthCheck();
  }

  @Get('/user')
  getUser(@Ip() ip: string) {
    console.log(`get user request: ${ip}`);
    return this.appService.getUser();
  }

  @Post('/images/record')
  setImage(
    @Body() body: { id: string; userId: string; prompt: string; s3Key: string },
    @Ip() ip: string,
  ) {
    console.log(`set image request: ${ip}`);
    const { id, userId, prompt, s3Key } = body;
    return this.appService.setImage(id, userId, prompt, s3Key);
  }
}
