import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { KitabModule } from './kitab/kitab.module';
import { AppService } from './root.service';
import { AppController } from './root.controller';

@Module({
  imports: [KitabModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
