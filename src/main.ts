import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function start() {
  const app = await NestFactory.create(RootModule);

  await app.listen(3000);
}
start();
