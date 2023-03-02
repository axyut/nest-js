import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { RootModule } from './root.module';

// Global Middleware
// function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
//   console.log('This is Global Middleware 1 ');
//   next();
// }
// function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
//   console.log('This is Global Middleware 2 ');
//   next();
// }

async function start() {
  const app = await NestFactory.create(RootModule);
  //app.use(globalMiddlewareOne);
  //app.use(globalMiddlewareTwo);
  await app.listen(3000);
}
start();
