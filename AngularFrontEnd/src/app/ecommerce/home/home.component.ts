import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      name: "goatMilk",
      image: "assets/images/products/goatMilk.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Pizza",
      image: "assets/images/products/pizza.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "goatMilk",
      image: "assets/images/products/goatMilk.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Pizza",
      image: "assets/images/products/pizza.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "goatMilk",
      image: "assets/images/products/goatMilk.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Pizza",
      image: "assets/images/products/pizza.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "goatMilk",
      image: "assets/images/products/goatMilk.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Pizza",
      image: "assets/images/products/pizza.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    },
    {
      name: "Bread",
      image: "assets/images/products/bread.png",
      price: "10000",count: 0,
      description: "It contains one leter of goat milk"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  dec(i: number) {
    this.products[i].count -= 1;
  }

  inc(i: number) {
    this.products[i].count += 1;
  }
}
