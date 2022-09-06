import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {


  selectedProduct: Product | undefined;
  @ViewChild (ProductDetailComponent) productDetail : ProductDetailComponent |undefined;

  products : Product[] = [
    {
      name : 'Webcam',
      price : 100
    },
    {
      name : 'Microphone',
      price : 200
    },
    {
      name : 'Wireless Keyboard',
      price : 85
    }
  ];



  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    if(this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy() {
    window.alert(` You just bought ${this.selectedProduct?.name}!`);
  }
  
}
