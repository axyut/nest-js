import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import * as request from 'supertest';

// @Injectable()
// export class bookGuard implements CanActivate {
//   canActivate(context: ExecutionContext): boolean {
//     // bruh this guard returns true(ok go inside) for every request
//     return true; // when false guard stops you with forbidden error 403
//   }
// }

@Injectable()
export class bookGuard implements CanActivate {
  public key: string = 'this is my key';

  canActivate(context: ExecutionContext): boolean {
    //console.log(context); // contains request contexts from user
    const req = context.switchToHttp().getRequest();

    if (req.header('key') == undefined && req.header('key') != this.key)
      return false;
    return true;
  }
}
