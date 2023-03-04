// import { UserService } from './user.service';
// import { Controller, Get, Post } from '@nestjs/common';

// @Controller('user')
// export class UserController {
//   constructor(private readonly user: UserService) {}

//   @Post()
//   create() {
//     return this.user.addBook();
//   }

//   @Get()
//   findAll() {
//     return this.user.findAllBooks();
//   }
// }

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Req() req): string {
    return req.user;
  }
}
