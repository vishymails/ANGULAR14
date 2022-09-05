import { Component, OnInit } from '@angular/core';


interface Book {
  name : string;
  author : string;
  src : string;
  price : number;

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

  
  data : string ="Dr.Rao";

 
  isShowing : boolean = true;


  customText : string = " Wikimedia Foundation, Inc. is a 501 nonprofit organization headquartered in San Francisco, California, registered as a charitable foundation under US law. It owns the Wikimedia projects – which are written and curated by thousands of Wikipedians and other unpaid volunteers";

  file = { name : "bvr.svg", size : 21200190, type : 'image/svg'};



  books : Book[] = [
    {
      name : "sherlock holmes series complete ",
      author : " Conan Doyle",
      src : 'https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg',
      price : 550

    },
    {
      name : "siddhartha",
      author : " Hermann Hesse",
      src : 'https://images-na.ssl-images-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg',
      price : 1200

    },
    {
      name : "Rich Dad Poor Dad ",
      author : "Robert T. Kiyosaki ",
      src : 'https://images-na.ssl-images-amazon.com/images/I/517VIc78Z0L._SX331_BO1,204,203,200_.jpg',
      price : 1000

    },
    {
      name : "India, Bharat and Pakistan : The Constitutional Journey of Sandwiched Civilisation",
      author : "J Sai Deepak ",
      src : 'https://m.media-amazon.com/images/I/71ZKMWgafjL._AC_UY218_.jpg',
      price : 574

    },
    {
      name : "MILLION MINDS ENGLISH UP TGT ENGLISH 20 PRACTICE SETS",
      author : "Yogesh Kumar",
      src : 'https://m.media-amazon.com/images/I/717madWznGL._AC_UY218_.jpg',
      price : 198

    }
  ]

  
  


  constructor() { }

  ngOnInit(): void {
  }

}
