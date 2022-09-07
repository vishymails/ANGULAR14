import { Component } from '@angular/core';
import { Family } from './family';
import { Product } from './product';
import { Location } from './location';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient-example';

  private products : Product[] = [];
  private families : Family[] = [];
  private locations : Location[] = [];
  private transactions : Transaction[] = [];

  private productsObservable : Observable<any> ;

  

  baseUrl:string = "http://localhost:3000";

  constructor(private httpClient : HttpClient) { 
    this.productsObservable = this.httpClient.get(this.baseUrl + "/products");
    console.log(this.productsObservable);
  }

  get_products() : Observable<Product> {
    this.productsObservable = this.httpClient.get(this.baseUrl + "/products");
    console.log(this.productsObservable);
    return this.productsObservable;
  }
    


  get_families() {
    return this.httpClient.get(this.baseUrl+"/families");
  }
  get_locations() {
    return this.httpClient.get(this.baseUrl+"/locations");
  }
  get_transactions() {
    return this.httpClient.get(this.baseUrl+"/families");
  }

}
