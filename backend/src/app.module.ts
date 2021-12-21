import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv'
import { CommandModule } from 'nestjs-command';
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

@Module({
  imports: [ MongooseModule.forRoot(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
