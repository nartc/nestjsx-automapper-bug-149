import { AutoMapper } from '@nartc/automapper';
import { Injectable } from '@nestjs/common';
import { InjectMapper } from 'nestjsx-automapper';
import { CreateUserDto } from './models/create-user.dto';
import { UserEntity } from './models/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectMapper() private mapper: AutoMapper) {}

  getHello(): string {
    return 'Hello World!';
  }

  test() {
    const user = new UserEntity();
    user.id = '123';
    user.phone = '123456789';
    return this.mapper.map(user, CreateUserDto);
  }
}
