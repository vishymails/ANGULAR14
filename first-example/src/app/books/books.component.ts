import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';






@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  companyName = "john deere pune India";

  todaysdate = new Date();

  datajson = {firstname : 'Ram', lastname : 'kumar', age : 25, address : {addr1 : 'bangalore', workaddr : 'pune'}};

  companies = ["ISRO", "Oracle", "Microsoft", "CitiBank", "ST Electronics", "IBM", "Cyient"];

  
  data : string ="Dr.Rao";

 
  isShowing : boolean = true;


  customText : string = " Wikimedia Foundation, Inc. is a 501 nonprofit organization headquartered in San Francisco, California, registered as a charitable foundation under US law. It owns the Wikimedia projects – which are written and curated by thousands of Wikipedians and other unpaid volunteers";

  file = { name : "bvr.svg", size : 21200190, type : 'image/svg'};


  private bookService : BooksService;


  constructor() { 

     // const name = new Name("Dr.Rao");
      this.bookService = new BooksService();
  }




  books : Book[] = [];

  
  cart : Book[] = [];
  

  ngOnInit(): void {

     //you can do at initialization level 
    this.books = this.bookService.getBooks();
 
  }


  addToCart(event : Book) {

    console.log(event);

  }

}


