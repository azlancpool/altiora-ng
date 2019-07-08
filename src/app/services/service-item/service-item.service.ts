import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ItemModel } from 'src/app/model/item-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceItemService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  listItem(){
    return this.http.get<ItemModel[]>('/altiora/itemWs/listItem');
  }

  saveItem(itemModel: ItemModel): Observable<ItemModel>{
    return this.http.post<ItemModel>('/altiora/itemWs/saveItem', itemModel, this.httpOptions);
  }

  updateItem(itemModel: ItemModel): Observable<any>{
    return this.http.put<ItemModel>('/altiora/itemWs/updateItem', itemModel, this.httpOptions);
  }

  deleteItem(idItem: String): Observable<any>{
    return this.http.delete<ItemModel>('/altiora/itemWs/deleteItem/item/'+idItem);
  }
}
