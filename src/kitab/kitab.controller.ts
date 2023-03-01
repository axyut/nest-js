import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Kitab } from './data/kitab.dto';
import { KitabService } from './kitab.service';

@Controller('kitab')
export class KitabController {
  constructor(private kitabService: KitabService) {}

  // all kitabs
  @Get('/findAll')
  getAllKitabs(): Kitab[] {
    return this.kitabService.findAllKitabs();
  }

  // update kitab
  @Put('/update')
  updateKitab(@Body() kitab: Kitab): string {
    return this.kitabService.updateKitabService(kitab);
  }

  // delete kitab
  @Delete('delete/:id')
  deleteKitab(@Param('id') kitabId: string): string {
    return this.kitabService.deleteKitabService(kitabId);
  }

  // add kitab
  @Post('/add')
  addKitab(@Body() kitab: Kitab): string {
    return this.kitabService.addKitabService(kitab);
  }
}
