import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from '../types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnChanges {

 @Input() book : Book = {} as Book;

 @Output() bookEmitter = new EventEmitter<Book>();

  constructor() { 
    console.log("Constructor has been called ");
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
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


  ngOnChanges(changes : SimpleChanges) {
    console.log(" ngonchanges called ");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ng do check method called ");
  }

  

}
