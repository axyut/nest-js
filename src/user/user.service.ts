import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [
    { username: 'User1', password: 'abcd', email: 'email@gmail.com' },
    { username: 'User2', password: 'asdf', email: 'mail@outlook.com' },
    { username: 'User3', password: 'ghjk', email: 'google@hotmail.com' },
  ];

  getUserByName(userName: string): User {
    return this.users.find((user) => user.username === userName);
  }

  addBook(): string {
    return 'This will add book';
  }

  findAllBooks(): string {
    return ' All the books';
  }
}
