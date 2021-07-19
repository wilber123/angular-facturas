import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import {Cliente} from '../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  URL_API= "http://localhost:8080/factura"  
 
  
  constructor(private http: HttpClient) { }


  getFacturas(){
    return this.http.get<Factura[]>(this.URL_API);
  
  }
  getFactura(Id:Factura){
    return this.http.get<Factura[]>(`${this.URL_API}/${Id.id}`);
  
  }
  deleteFactura(factura: Factura){
    return this.http.delete(`${this.URL_API}/${factura.id}`, { responseType: 'text' });
  }
  createFactura(data:any){
    return this.http.post(`${this.URL_API}`,data);
  }
}
