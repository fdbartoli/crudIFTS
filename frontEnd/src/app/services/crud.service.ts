import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'http://localhost:3000/api/items/';

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  deleteItem(id: string): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  postItem(item: Item): Observable<any> {
    return this.httpClient.post(this.url, item);
  }

  getItemById(id: string): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  editItem(id: string, item: Item): Observable<any> {
    return this.httpClient.put(this.url + id, item);
  }
}
