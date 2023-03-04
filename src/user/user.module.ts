import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // means this module will go outside and other module and import and use this functionality
})
export class UserModule {
  constructor() {
    console.log('User Module');
  }
}
