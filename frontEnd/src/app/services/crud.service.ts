import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = "http://localhost:3000/api/items";

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<any> {
    return this.httpClient.get(this.url);
    }
}
