import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../core/commonServices/ecommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  searchText = "";

  constructor(private http: HttpClient, private ecommService: EcommerceService) {
   
  }

  ngOnInit(): void {
    this.http.get('http://localhost:90/ecommerce/products', { responseType: 'json' }).subscribe((res: any) => {
      console.log(res);
      this.products = res.map((item: any) => ({ ...item, count: 0 }));
    });
    this.ecommService.itemSearh.subscribe((res: string) => {
      this.searchText = res;
      console.log(this.searchText);
    });
  }

  filterProducts(text: string) {
    return this.products?.filter((item: any) => item.name.toLowerCase().includes(text.toLowerCase())) || [];
  }

  dec(id: number) {
    const index = this.products.findIndex((item: any) => item.id == id)
    console.log(index);
    this.products[index].count -= 1;
    this.ecommService.updateCartCount(-1);
  }

  inc(id: number) {
    const index = this.products.findIndex((item: any) => item.id == id)
    console.log(index);
    this.products[index].count += 1;
    this.ecommService.updateCartCount(1);
  }
}
