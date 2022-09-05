import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {


  @Input() product : Product | undefined ;
  @Output() bought = new EventEmitter();


  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
      if(!product.isFirstChange()) {
        const oldValue = product.previousValue.name;
        const newValue = product.currentValue.name;

        console.log(`product changed from ${oldValue} to ${newValue}`);
      }
  }

  buy() {
    this.bought.emit();
  }

  ngOnInit(): void {
  }

}
