import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Picture} from '../models/Picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private readonly API_URL = 'http://localhost:8080/api/admin/picture';

  constructor(private http: HttpClient) { }

  getAllPicture(): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${this.API_URL}`);
  }
  getPictureById(id: number): Observable<Picture> {
    return this.http.get<Picture>(`${this.API_URL}/${id}`);
  }
  createPicture(picture: Picture): Observable<Picture> {
    return this.http.post<Picture>(this.API_URL, picture);
  }
  deletePicture(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updatePicture(picture: Picture): Observable<Picture> {
    return this.http.put<Picture>(`${this.API_URL}/${picture.id}`, picture);
  }
}
