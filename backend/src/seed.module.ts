import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { PaymentPlanSeeder } from './payment-plans/payment-plan.seeder';
import { PaymentPlansModule } from './payment-plans/payment-plans.module';
import { RoleModule } from './role/role.module';
import { RoleSeeder } from './role/role.seeder';
import { UserModule } from './user/user.module';

import { UserSeeder } from './user/user.seeder';

@Module({
    imports: [CommandModule, UserModule, RoleModule, PaymentPlansModule],
    providers: [UserSeeder, RoleSeeder, PaymentPlanSeeder],
    exports: [UserSeeder,RoleSeeder, PaymentPlanSeeder],
})
export class SeedsModule {}