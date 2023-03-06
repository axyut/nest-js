import { Injectable } from '@nestjs/common';
import { StoreModel } from './store.model';

@Injectable()
export class AppService {
  public stores: StoreModel[] = [
    {
      title: 'Harry Man',
      author: 'Jk hero',
      published: 2005,
    },
    {
      title: 'Harry Woman',
      author: 'Jk heroine',
      published: 2069,
    },
  ];

  getAllStore(): StoreModel[] {
    return this.stores;
  }

  getHello(): string {
    return 'hello';
  }
}
