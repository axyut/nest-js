import { Module } from '@nestjs/common';
import { KitabController } from './kitab.controller';
import { KitabService } from './kitab.service';

@Module({
  imports: [],
  controllers: [KitabController],
  providers: [KitabService],
})
export class KitabModule {}
