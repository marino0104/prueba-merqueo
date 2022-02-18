import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product:any;
  @Output() emitProduct= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.info(this.product);
  }
  saveToCart(productBuyed: any){
    this.emitProduct.emit(productBuyed);
  }

}
