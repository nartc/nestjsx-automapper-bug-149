import { AutoMap } from '@nartc/automapper';

export class CreateUserDto {
  @AutoMap()
  id: string;
  @AutoMap()
  phone: string;
}
