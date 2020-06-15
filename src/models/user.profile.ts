import { ProfileBase, AutoMapper } from "@nartc/automapper";
import { CreateUserDto } from './create-user.dto';
import { UserEntity } from './user.entity';

export class UserProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(UserEntity, CreateUserDto);
  }
}
