import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleController } from './role.controller';
import { RoleSchema } from './role.model';
import { RoleService } from './role.service';

@Module({
  imports : [MongooseModule.forFeature([{name : "Role", schema : RoleSchema}])],
  controllers: [RoleController],
  providers: [RoleService],
  exports : [RoleService]
})
export class RoleModule {}
