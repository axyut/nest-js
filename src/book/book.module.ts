import { Module } from '@nestjs/common';
import { bookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [bookController],
  providers: [BookService],
})
export class BookModule {}
