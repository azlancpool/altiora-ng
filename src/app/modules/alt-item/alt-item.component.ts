import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/model/item-model';
import { ServiceItemService } from 'src/app/services/service-item/service-item.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-alt-item',
  templateUrl: './alt-item.component.html',
  styleUrls: ['./alt-item.component.css']
})
export class AltItemComponent implements OnInit {

  modalTitle:String;
  title = 'Una vez ingresada la clave del artículo esta no podrá ser modificada';

  currentItem: ItemModel = null;

  itemList: Array<ItemModel> = [];
  idItem: String;
  name: String;
  unitPrice: Number | null;

  editFlag: Boolean = false;

  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  isVisible = false;

  constructor(
    private itemService: ServiceItemService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loadItemList();
  }

  loadItemList(){
    this.itemService.listItem().subscribe((data:ItemModel[]) =>{
      this.itemList = data;
    });
  }

  nuevo(): void {
    this.editFlag = false;
    this.modalTitle = 'Nuevo Artículo';
    this.name="";
    this.idItem="";
    this.unitPrice=0.0;
    this.isVisible = true;
  }

  editar(itemModel: ItemModel): void {
    this.editFlag = true;
    this.modalTitle = 'Editar Artículo';
    this.currentItem = itemModel;
    this.idItem = itemModel.idItem;
    this.name = itemModel.name;
    this.unitPrice = itemModel.unitPrice;
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    let exit: Boolean = true;
    if(this.idItem == ""){
      this.message.create('error', `Por favor ingrese una clave para el artículo ingresado`);
      exit = false;
    }
    if(this.name == ""){
      this.message.create('error', `Por favor ingrese una nombre para el artículo ingresado`);
      exit = false;
    }
    if(String(this.unitPrice) == ""){
      this.unitPrice=0.0;
    }
    if(exit){
      if(this.currentItem == null){
        console.log('the item register will be save');
        let newItem = new ItemModel();
        newItem.idItem = this.idItem;
        newItem.name = this.name;
        newItem.unitPrice = this.unitPrice;
        this.itemService.saveItem(newItem).subscribe(()=>{
          this.loadItemList();
          this.message.create('success', `Artículo nuevo guardado`);
        })
      } else if (this.currentItem.name != this.name || this.currentItem.unitPrice != this.unitPrice){
        this.currentItem.name = this.name;
        this.currentItem.unitPrice = this.unitPrice;
        this.itemService.updateItem(this.currentItem).subscribe(()=>{
          this.loadItemList();
          this.message.create('success', `Artículo editado`);
        })
      }
      
      this.currentItem =null;
      this.editFlag = false;
      this.isVisible = false;
    }
    
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;
  }

  deleteItem(item: ItemModel): void {
    console.log('the item register will be save');
    this.itemService.deleteItem(item.idItem).subscribe(()=>{
      this.loadItemList();
      this.message.create('success', 'Registro ha sido eliminado');
    })
  }

  cancel(): void {
    
  }

  onBlur(): void {
    this.title = 'Una vez ingresada la clave del artículo esta no podrá ser modificada';
  }

}
