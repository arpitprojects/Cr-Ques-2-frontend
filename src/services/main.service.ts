import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {

  }
  getData(){
    return this.http.get('http://localhost:8000/api/v1/bug/list/');
  }
}
