import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { KitabController } from './kitab.controller';
import { KitabMiddleware } from './kitab.middleware';
import { KitabService } from './kitab.service';

@Module({
  imports: [],
  controllers: [KitabController],
  providers: [KitabService],
})
export class KitabModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(KitabMiddleware).forRoutes('kitab');
  }
}
