import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientModel } from 'src/app/model/client-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  listClient(){
    return this.http.get<ClientModel[]>('/altiora/clientWs/listClient');
  }

  saveClient(clientModel: ClientModel): Observable<ClientModel>{
    return this.http.post<ClientModel>('/altiora/clientWs/saveClient', clientModel, this.httpOptions);
  }

  updateClient(clientModel: ClientModel): Observable<any>{
    return this.http.put<ClientModel>('/altiora/clientWs/updateClient', clientModel, this.httpOptions);
  }

  deleteClient(idClient: Number): Observable<any>{
    return this.http.delete<ClientModel>('/altiora/clientWs/deleteClient/client/'+String(idClient));
  }
}
