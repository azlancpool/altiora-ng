import { ItemModel } from './item-model';
import { ClientModel } from './client-model';

export class OrderItemModel {    
    idOrderItem: Number;
    itemDTO: ItemModel = new ItemModel();
    quantity: Number;
    price: Number;

}