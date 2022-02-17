import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './components/card/card.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CartButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    CardComponent,
    CartButtonComponent
  ]
})
export class SharedModule { }
