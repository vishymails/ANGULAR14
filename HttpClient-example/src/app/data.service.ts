import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "http://localhost:3000";

  constructor(private httpClient : HttpClient) { }

  get_products() {
    return this.httpClient.get(this.baseUrl+"/products");
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



