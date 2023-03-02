// custom pipe

import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    console.log(value);

    if (value.id == 1 && typeof value.id == 'number') {
      return value; // if and only if the id is equal to 1 it will not throw error
    } else
      throw new BadRequestException('validation failed, send expected value');
  }
}
