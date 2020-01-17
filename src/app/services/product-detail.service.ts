import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDetail} from '../models/productDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private readonly API_URL = 'http://localhost:8080/api/auth/productDetail';

  constructor(private http: HttpClient) { }
  getProductDetail(): Observable<ProductDetail[]> {
    return this.http.get<ProductDetail[]>(`${this.API_URL}`);
  }
  getProductDetailById(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.API_URL}/${id}`);
  }
  createProductDetail(productDetail: ProductDetail): Observable<ProductDetail> {
    return this.http.post<ProductDetail>(this.API_URL, productDetail);
  }
  updateProductDetail(productDetail: ProductDetail): Observable<ProductDetail> {
    return this.http.put<ProductDetail>(`${this.API_URL}/${productDetail.id}`, productDetail);
  }
  deleteProductDetail(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
