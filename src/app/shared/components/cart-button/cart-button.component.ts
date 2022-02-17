import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  cartNumber:number=0


  constructor() { }

  ngOnInit(): void {
  }

  openCart(): void{
    console.info('abre')
  }
}
