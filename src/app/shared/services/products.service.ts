import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    const url='https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b';
    return this.http.get<any>(url);
  }

}
