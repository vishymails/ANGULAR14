import { Component, OnInit } from '@angular/core';


interface Book {
  name : string;
  author : string;
  src : string;

}



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

  books : Book[] = [
    {
      name : "sherlock holmes series complete ",
      author : " Conan Doyle",
      src : 'https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg'

    },
    {
      name : "siddhartha",
      author : " Hermann Hesse",
      src : 'https://images-na.ssl-images-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg'

    }
  ]

  
  



  data : string ="Dr.Rao";

 
  isShowing : boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
