import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/model/client-model';
import { ServiceClientService } from 'src/app/services/service-client/service-client.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-alt-client',
  templateUrl: './alt-client.component.html',
  styleUrls: ['./alt-client.component.css']
})
export class AltClientComponent implements OnInit {

  modalTitle:String;

  clientList: Array<ClientModel> = [];
  name: String="";
  lastName: String="";
  currentClient: ClientModel = null;
  
  isVisible = false;

  constructor(
    private clientService: ServiceClientService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loadClientList();
  }

  loadClientList(){
    this.clientService.listClient().subscribe((data:ClientModel[]) =>{
      this.clientList = data;
    });
  }

  nuevo(): void {
    this.modalTitle = 'Nuevo Cliente';
    this.name="";
    this.lastName="";
    this.isVisible = true;
  }

  editar(clientModel: ClientModel): void {
    this.modalTitle = 'Editar Cliente';
    this.currentClient = clientModel;
    this.name = clientModel.name;
    this.lastName = clientModel.lastName;
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    let exit: Boolean = true;
    if(this.name == ""){
      this.message.create('error', `Por favor ingrese el nombre del cliente`);
      exit = false;
    }
    if(this.lastName == ""){
      this.message.create('error', `Por favor ingrese el apellido del cliente`);
      exit = false;
    }
    if(exit){
      if(this.currentClient == null){
        console.log('the client register will be save');
        let newClient = new ClientModel();
        newClient.name = this.name;
        newClient.lastName = this.lastName;
        this.clientService.saveClient(newClient).subscribe(()=>{
          this.loadClientList();
          this.message.create('success', `Cliente nuevo guardado`);
        })
      }else if (this.currentClient.name != this.name || this.currentClient.lastName != this.lastName){
        console.log('the client register will be update');
        this.currentClient.name = this.name;
        this.currentClient.lastName = this.lastName;
        this.clientService.updateClient(this.currentClient).subscribe(()=>{
          this.loadClientList();
          this.message.create('success', `Cliente editado`);
        });
      }
      this.currentClient =null;
      this.isVisible = false;
    }
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;
  }

  deleteClient(client: ClientModel): void {
    console.log('the client register will be save');
    this.clientService.deleteClient(client.idClient).subscribe(()=>{
      this.loadClientList();
      this.message.create('success', 'Registro ha sido eliminado');
    })
  }

  cancel(): void {

  }

}
