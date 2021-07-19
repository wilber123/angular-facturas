import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  URL_API= "http://localhost:8080/producto"
  

  selectedFactura: Producto={   
    nombre:'',
    precio:0,
    stock:0
  };

  producto!: Producto[];  
 
  
  constructor(private http: HttpClient) { }


  getProductos(){
    return this.http.get<Producto[]>(this.URL_API);
  
  }
  getProducto(Id:Producto){
    return this.http.get<Producto[]>(`${this.URL_API}/${Id.productoId}`);
  
  }
  deleteProducto(producto: Producto){
    return this.http.delete(`${this.URL_API}/${producto.productoId}`, { responseType: 'text' });
  }
  createProducto(producto: Producto){
    return this.http.post(`${this.URL_API}`,producto);
  }
}
