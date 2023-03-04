import { HttpException, HttpStatus } from '@nestjs/common';

export class BookException extends HttpException {
  constructor() {
    super('this the custom exception error', HttpStatus.BAD_REQUEST);
  }
}
