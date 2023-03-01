import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBook(): string {
    return 'This will add book';
  }

  deleteBook(): String {
    return 'This is for deleting book';
  }

  updateBook(): string {
    return 'This will update book';
  }

  findAllBooks(): string {
    return ' All the books';
  }
}
