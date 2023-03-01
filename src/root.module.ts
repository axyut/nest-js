import { Module } from '@nestjs/common';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule, OrdersModule, UsersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}