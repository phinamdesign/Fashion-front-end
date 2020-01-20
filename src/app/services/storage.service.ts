import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public get(): Storage {
    return localStorage;
  }
}
