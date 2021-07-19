import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ClienteService {
  URL_API= "http://localhost:8080/cliente"
  
  selectedCliente: Cliente={
     id:0,
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    nacimiento:'',
    direccion:''
  };

  cliente!: Cliente[];  
  
  
  constructor(private http: HttpClient) { }


  getClientes(){
    return this.http.get<Cliente[]>(this.URL_API);
  
  }
  getCliente(Id:Cliente){
    return this.http.get<Cliente[]>(`${this.URL_API}/${Id.id}`);
  
  }
  deleteCliente(cliente: Cliente){
    return this.http.delete(`${this.URL_API}/${cliente.id}`, { responseType: 'text' });
  }
  createCliente(cliente: Cliente){
    return this.http.post(`${this.URL_API}`, cliente);
  }
}
