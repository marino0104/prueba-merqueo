import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  @Input() cart: any;
  cartNumber:number=0


  constructor() { }

  ngOnInit(): void {
    this.cartNumber=this.cart.length;
  }

  openCart(): void{
    console.info('abre')
  }
}
