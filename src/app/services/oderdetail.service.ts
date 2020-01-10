import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OderdetailService {
private baseUrl = '';
  constructor(private http: HttpClient) { }
  getOderdetail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getOderdetailList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createOderdetail(oderdetail: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, oderdetail);
  }
  deleteOderdetail(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, {responseType: 'text'});
  }
  updateOderdetail(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
