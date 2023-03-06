import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import { join } from 'path';
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
  const app = await NestFactory.create<NestExpressApplication>(RootModule);

  // Global Middlewares
  //app.use(globalMiddlewareOne);
  //app.use(globalMiddlewareTwo);

  // set up for templating engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
start();
