import { Module } from '@nestjs/common';
import { Feature3 } from './feature/feature3.module';

@Module({
  imports: [Feature3],
  controllers: [],
  providers: [],
  exports: [],
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }
}
