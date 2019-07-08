import { ItemModel } from './item-model';
import { ClientModel } from './client-model';

export class OrderModel {    
    idOrder: Number;
    idClient: Number;
    date: Date;
    clientDTO: ClientModel;
    itemDTO: ItemModel;
    quantity: Number;
    price: Number;
}