import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { bookDto } from './Dto/book.dto';
import { BookPipe } from './pipes/book.pipes';
import { ValidPipe } from './pipes/validation.pipes';
import { BookException } from './book.exception';
import { bookGuard } from './book.guard';

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
  @Get('/id/:id')
  book(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return `sent param was ${id}, type was ${typeof id}`;
    // even though is is expected to be number, string is returned
    // this issue is solved by pipes  (ParseIntPipes)
  }

  // Custom Pipes
  @Post('/pipetest')
  pipeTest(@Body(new BookPipe()) book: bookDto): string {
    return 'Expected Value sent that is number 1 as id';
  }

  @Post('/validation')
  validation(@Body(new ValidPipe()) book: bookDto): string {
    return 'Expected Value sent';
  }

  // default nestjs validation but those packages should be installed
  @Post('/nestValid')
  nestValid(@Body(new ValidationPipe()) book: bookDto): string {
    return 'Expected Value sent';
  }

  // Built in Exception
  @Get('/new')
  newRoute() {
    // default error
    // throw new BadRequestException();
    // throw new BadRequestException({
    //   status: 401,
    //   error: 'Custom error message',
    // });

    // custom class exception
    throw new BookException();
  }

  // using a guard
  @Get('/security')
  @UseGuards(new bookGuard()) // can also be used at controller level for all endpoints
  // can also be used globally in main.ts => app.useGlobalGuards(new bookGuard())
  secureGuard(): string {
    return 'Guard let you in.';
  }
}
