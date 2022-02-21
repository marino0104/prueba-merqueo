import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart: any 

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart(): void{
    this.cart=this.productService.getCart()
  }

}
