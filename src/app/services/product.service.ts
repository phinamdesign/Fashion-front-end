import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080/api/admin/product';
  private url = 'http://localhost:8080/api/auth/product';
=======

  private baseUrl = 'http://localhost:8080/api/auth/product';

>>>>>>> master
  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  createProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http.post(this.baseUrl, {
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      pictures: product.pictures,
      category: product.category,
      supplier: product.supplier
    });
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.baseUrl + '/' + product.id, {
      name: product.name,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      pictures: product.pictures,
      category: product.category,
      supplier: product.supplier
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getListProduct(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  searchByName(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url + '/search-by-name', product);
  }
}
