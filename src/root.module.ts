import { Module } from '@nestjs/common';
import { bookController } from './app.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [bookController],
  providers: [BookService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
