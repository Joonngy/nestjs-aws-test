import { Controller, Get, Ip } from '@nestjs/common';
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
    console.log(`request: ${ip}`);
    return this.appService.getUser();
  }
}
