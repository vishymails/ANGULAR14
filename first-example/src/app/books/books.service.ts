import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name : "sherlock holmes ",
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
        name : "India, Bharat and Pakistan",
        author : "J Sai Deepak ",
        src : 'https://m.media-amazon.com/images/I/71ZKMWgafjL._AC_UY218_.jpg',
        price : 574
  
      },
      {
        name : "MILLION MINDS ",
        author : "Yogesh Kumar",
        src : 'https://m.media-amazon.com/images/I/717madWznGL._AC_UY218_.jpg',
        price : 198
  
      }
    ];
  }
}
