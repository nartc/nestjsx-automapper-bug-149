import { AutoMap } from "@nartc/automapper";

export class UserEntity {
  @AutoMap()
  id?: string;
  @AutoMap()
  phone?: string;
}
