import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList=[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void{
    this.productsService.getProducts().subscribe(res=>{
      if(res.data){
        localStorage.setItem('products', JSON.stringify(res.data));
        this.setProducts();
      }
    })
  }

  setProducts(): void{
    if(localStorage.getItem('products')){
      this.productsList=JSON.parse(localStorage.getItem('products') || '[]');
    }
    console.info(this.productsList)
  }

  pushProductOnCart(productItem: any){
    console.info(productItem)
  }
}
