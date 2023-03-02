import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { KitabModule } from './kitab/kitab.module';

@Module({
  imports: [KitabModule, BookModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
