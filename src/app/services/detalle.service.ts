import { Injectable } from '@angular/core';
import { Detalle } from '../models/detalle';
import { Factura } from '../models/factura';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  URL_API= "http://localhost:8080/detalle"
  producto!: Producto[]; 
  factura!: Factura[];  

  selectedCliente: Detalle={
    cantidad:0,
    precio:0,
    producto:this.producto,
    factura:this.factura
  };

  detalle!: Detalle[]; 
  
  
  
  constructor(private http: HttpClient) { }


  getDetalles(){
    return this.http.get<Detalle[]>(this.URL_API);
  
  }
  getDetalle(Id:Detalle){
    return this.http.get<Detalle[]>(`${this.URL_API}/${Id.detalleId}`);
  
  }
  deleteDetalle(detalle: Detalle){
    return this.http.delete(`${this.URL_API}/${detalle.detalleId}`, { responseType: 'text' });
  }
  createDetalle(detalle: Detalle){
    return this.http.post(`${this.URL_API}`, detalle);
  }
}
