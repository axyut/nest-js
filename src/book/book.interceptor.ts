import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { map, Observable } from 'rxjs';

@Injectable()
export class bookIntercepter implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();
    request.body.message =
      'sending extra information that client didnt provided';
    request.body.name = 'mann minn';
    request.body.age = 21;

    // handle returns observable value and we pipe it (getting is one by one)
    return next.handle().pipe(
      map((data) => {
        console.log(data); // response from the server

        data = 'from interceptor';
        return data;
      }),
    );
  }
}
