import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { KitabModule } from './kitab/kitab.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [KitabModule, BookModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
