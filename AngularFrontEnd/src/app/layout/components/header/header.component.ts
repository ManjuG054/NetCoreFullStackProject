import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../../core/commonServices/ecommerce.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  constructor(private ecommService: EcommerceService) { }

  ngOnInit(): void {
    this.ecommService.cartCount.subscribe((itemsCount: number) => { this.cartCount = itemsCount})
  }

  sendSearchText(searchText: string) {
    this.ecommService.itemSearh.next(searchText);
  }

}
