import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/product/';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  // tslint:disable-next-line:ban-types
  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.http}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getListProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  searchByName(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.baseUrl + 'search-by-name', product);
  }
}
