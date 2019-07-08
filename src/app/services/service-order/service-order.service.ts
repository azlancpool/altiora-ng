import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderModel } from 'src/app/model/order-model';
import { OrderItemModel } from 'src/app/model/order-item-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  listOrder(){
    return this.http.get<OrderModel[]>('/altiora/orderWs/listOrder');
  }

  listItemsByOrderId(idOrder: Number){
    return this.http.get<OrderItemModel[]>('/altiora/orderWs/listItemsByOrderId/'+String(idOrder));
  }
}
