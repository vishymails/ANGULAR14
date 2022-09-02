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

  books : Book[] = [
    {
      name : "Sherlock Holmes Series Complete ",
      author : " Conan Doyle",
      src : 'https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg'

    },
    {
      name : "Siddhartha",
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
