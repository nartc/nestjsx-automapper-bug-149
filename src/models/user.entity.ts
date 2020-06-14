import { AutoMap } from "nestjsx-automapper";

export class UserEntity {
  @AutoMap()
  id?: string;
  @AutoMap()
  phone?: string;
}
