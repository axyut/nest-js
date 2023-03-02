import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// Local middleware

@Injectable()
export class KitabMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol; // https ot http
    let host = req.get('host'); // local host or server
    let url = req.originalUrl;
    let method = req.method;
    let date = new Date().toDateString();

    console.log(
      `Server Hit! \n Protocol: ${protocol} \n Route: ${host}${url} \n Method: ${method} \n Date: ${date}`,
    );
    next();
    // needs to be registered in th eparticular module
  }
}
