import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class bookController {
  constructor(private bookService: BookService) {}

  // add book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  // delete book
  @Delete('/delete')
  deleteBook(): String {
    return this.bookService.deleteBook();
  }

  // updating book
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  // find all books
  @Get('/allbook')
  findAllBooks(): string {
    return this.bookService.findAllBooks();
  }

  //find a book
  @Get('/:id')
  book(@Param() params): string {
    console.log(params.id);
    return `sent param was ${params.id}`;
  }
}
