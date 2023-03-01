import { Module } from '@nestjs/common';
import { KitabModule } from './kitab/kitab.module';

@Module({
  imports: [KitabModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
