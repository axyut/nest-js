import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './root.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): any {
    return res.render('index', { stores: this.appService.stores });
  }
}
