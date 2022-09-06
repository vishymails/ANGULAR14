import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
    
import { Book } from '../../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

 @Input() book : Book = {} as Book;

 isInCart : boolean = false ;

  constructor(private cartService : CartService) { 
    console.log("Constructor has been called ");
  }
  
  myInterval : any = null;


  ngOnInit(): void {
    console.log('Init method called ');
 }

  addToCart() {
   // console.log(this.book);
   // this.bookEmitter.emit(this.book);
   this.isInCart = true;
   this.cartService.addToCart(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
