// validation with packages class-transformer and class-validator

import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { bookDto } from '../Dto/book.dto';

export class ValidPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // class transform
    const bookClass = plainToInstance(bookDto, value);
    console.log(bookClass);

    // class validations
    const errors = await validate(bookClass);
    console.log(errors);

    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation Failed.' + JSON.stringify(errors),
      );
    }
    // console.log(value, typeof value);
    return value;
  }
}
