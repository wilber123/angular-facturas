import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { FormBuilder, FormGroup } from "@angular/forms";


import { Cliente } from 'src/app/models/cliente';

import { Factura } from 'src/app/models/factura';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  selectedCliente: Cliente={
    id:0,
   nombre:'',
   apellido:'',
   email:'',
   telefono:'',
   nacimiento:'',
   direccion:''
 };

 
  clie: Cliente[]=[];

  selectedFactura: Factura={   
    id:0,
    fechaFactura:'',  
    cliente: this.clie
  };
  factura: Factura[]=[]; 

  submitted = false;
  constructor(private formBuilder: FormBuilder,public facturaService : FacturaService, public clienteService: ClienteService) {}
   
  
  ngOnInit(): void {
    this.getFacturas();
    this.getClientes();

  }
  getFacturas(){
    this.facturaService.getFacturas().subscribe(
      (res)=> {
      this.factura=res;
       console.log(res);
      },
      (err)=> console.error(err)
    );
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(
      (res)=> {
       this.clienteService.cliente= res;
       console.log(res);
      },
      (err)=> console.error(err)
    );
  }

  submitForm() {
    const data = {
      fechaFactura: this.selectedFactura.fechaFactura,
      cliente: this.selectedFactura.cliente
    };
   
    this.facturaService.createFactura(data).subscribe(
      (res)=> {
        console.log(res);  
        this.getFacturas();
        this.submitted = true; 
      },
      (err)=> console.error(err)
    );
  }
}
