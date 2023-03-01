import { Injectable } from '@nestjs/common';
import { Kitab } from './data/kitab.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class KitabService {
  public kitabs: Kitab[] = [];

  //add book
  addKitabService(kitab: Kitab): string {
    // id auto generate with uuid package npm i uuid
    kitab.id = uuidv4();
    this.kitabs.push(kitab);
    return 'Book has been sucessfully added.';
  }

  // update book
  updateKitabService(kitab: Kitab): string {
    let index = this.kitabs.findIndex((currentKitab) => {
      return currentKitab.id === kitab.id;
    });
    this.kitabs[index] = kitab;
    return 'book has been successfully updated';
  }

  //delete book
  deleteKitabService(kitabId: string): string {
    this.kitabs = this.kitabs.filter((kitab) => kitab.id != kitabId);
    return 'book has been deleted';
  }

  // find all books
  findAllKitabs(): Kitab[] {
    return this.kitabs;
  }
}
