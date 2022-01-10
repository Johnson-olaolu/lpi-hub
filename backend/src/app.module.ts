import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv'
import { CommandModule } from 'nestjs-command';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { SeedsModule } from './seed.module';
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

@Module({
  imports: [ MongooseModule.forRoot(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }),
  UserModule, RoleModule, PermissionModule, SeedsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
