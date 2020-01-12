import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly API_URL = 'http://localhost:8080/api/admin/category';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}`);
  }
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/${id}`);
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.API_URL, category);
  }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  // getCategory(): Observable<any> {
  //   return this.http.get(`${this.API_URL}`);
  // }
}