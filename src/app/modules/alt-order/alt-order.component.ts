import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from 'src/app/services/service-order/service-order.service';
import { OrderModel } from 'src/app/model/order-model';
import { OrderItemModel } from 'src/app/model/order-item-model';

@Component({
  selector: 'app-alt-order',
  templateUrl: './alt-order.component.html',
  styleUrls: ['./alt-order.component.css']
})
export class AltOrderComponent implements OnInit {

  orderList: Array<OrderModel> = [];
  orderItemList: Array<OrderItemModel> = [];
  showTable=false;
  
  isVisible = false;

  constructor(
    private orderService: ServiceOrderService
  ) { }

  ngOnInit() {
    this.loadOrderList();
  }

  loadOrderList(){
    this.orderService.listOrder().subscribe((data: OrderModel[]) => {
      this.orderList = data;
    })
  }

  listarArticulos(orderModel: OrderModel): void{
    this.showTable = true;
    this.orderService.listItemsByOrderId(orderModel.idOrder).subscribe((data: OrderItemModel[]) => {
      this.orderItemList = data;
    })
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    this.isVisible = false;    
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;    
  }

}
