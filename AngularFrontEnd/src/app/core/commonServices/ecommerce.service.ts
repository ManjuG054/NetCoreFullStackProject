import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  cartCount = new BehaviorSubject(0);
  itemSearh = new BehaviorSubject("");
  constructor() { }
  updateCartCount(count : number) {
    const tempCount = this.cartCount.value + count;
    this.cartCount.next(tempCount);
  };

  updateItemSearh(searchText: string) {
    this.itemSearh.next(searchText);
  }
}
