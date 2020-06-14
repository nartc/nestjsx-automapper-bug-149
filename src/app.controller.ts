import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './models/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): CreateUserDto {
    return this.appService.test();
  }
}
