import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes(){
    this.clienteService.getClientes().subscribe(
      (res)=> {
       this.clienteService.cliente= res;
      },
      (err)=> console.error(err)
    );
  }

}
