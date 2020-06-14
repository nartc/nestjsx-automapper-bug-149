import { AutoMap } from 'nestjsx-automapper';

export class CreateUserDto {
  @AutoMap()
  id: string;
  @AutoMap()
  phone: string;
}
