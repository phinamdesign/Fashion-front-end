import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OderService {
  private baseUrl = 'http://localhost:8080/api/auth/order';
  constructor(private http: HttpClient) { }
  getOderById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getOderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createOder(oder: Order): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, oder);
  }
  deleteOder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateOder(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
