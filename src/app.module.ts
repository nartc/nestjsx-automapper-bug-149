import { AutoMapper } from '@nartc/automapper';
import { Module } from '@nestjs/common';
import { AutomapperModule, InjectMapper } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProfile } from './models/user.profile';

@Module({
  imports: [AutomapperModule.withMapper()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@InjectMapper() mapper: AutoMapper) {
    mapper.addProfile(UserProfile);
  }
}
