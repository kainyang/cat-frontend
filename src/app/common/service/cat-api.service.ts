import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(private http: HttpClient) { }

  getRandomCat() {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
