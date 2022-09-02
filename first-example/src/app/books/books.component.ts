import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name : string = "Sherlock Holmes Series Complete ";

  author : string = " Conan Doyle";

  src :string = 'https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg';

  name2 : string = "Siddhartha  ";

  author2 : string = " Hermann Hesse";

  src2 :string = 'https://images-na.ssl-images-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
