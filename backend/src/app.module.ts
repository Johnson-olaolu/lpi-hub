import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { AdminModule } from './admin/admin.module';
import { PermissionModule } from './permission/permission.module';
import { PaymentPlansModule } from './payment-plans/payment-plans.module';
import { RolePermissionModule } from './role-permission/role-permission.module';
import { PaymentLogsModule } from './payment-logs/payment-logs.module';
import * as dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

@Module({
  imports: [UserModule, MongooseModule.forRoot(MONGODB_URI), RoleModule, AdminModule, PermissionModule, PaymentPlansModule, RolePermissionModule, PaymentLogsModule],
  controllers: [AppController, RoleController],
  providers: [AppService],
})
export class AppModule {}
