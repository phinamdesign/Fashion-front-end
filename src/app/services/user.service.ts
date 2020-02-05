import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/auth/user';

  constructor(private http: HttpClient) { }

  // getDiaryByUser(userId: string): Observable<Diary[]> {
  //   return this.http.get<Diary[]>(this.svUserUrl + userId + '/diary' );
  // }

  // getUserById(userId: string): Observable<User> {
  //   return this.http.get<User>(`${this.userUrl}/${userId}`);
  // }
  //
  // getListUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.userUrl);
  // }
  //
  // deleteUserById(id: string): Observable<void> {
  //   return this.http.delete<void>(this.userUrl + id);
  // }

  // searchUserByName(user: SearchUserByName): Observable<User[]> {
  //   return this.http.post<User[]>(this.svUserUrl + 'search-by-name' , user);
  // }
  //
  // uploadUserAvatar(file: FormData, userId: string): Observable<FileForm> {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //
  //   return this.http.post<FileForm>(this.svUserAvatarUrl + userId, file, {headers});
  // }
}
