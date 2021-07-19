import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.getFacturas();
  }
  getFacturas(){
    this.productoService.getProductos().subscribe(
      (res)=> {
       this.productoService.producto= res;
      },
      (err)=> console.error(err)
    );
  }
}
