import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

 @Input() book : Book = {} as Book;

 @Output() bookEmitter = new EventEmitter<Book>();

  constructor() { 
    console.log("Constructor has been called ");
  }
  ngOnDestroy(): void {
   // throw new Error('Method not implemented.');

   clearInterval(this.myInterval);
   console.log("destroy method called ");
  }

  myInterval : any = null;


  ngOnInit(): void {
    console.log('Init method called ');

    this.myInterval = setInterval(() => {
      console.log("delayed message ")
    }, 1000);
  }

  addToCart() {
   // console.log(this.book);
    this.bookEmitter.emit(this.book);
  }

}
