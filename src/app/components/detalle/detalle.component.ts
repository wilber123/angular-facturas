import { Component, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public detalleService : DetalleService) { }

  ngOnInit(): void {
    this.getFacturas();
  }
  getFacturas(){
    this.detalleService.getDetalles().subscribe(
      (res)=> {
       this.detalleService.detalle= res;
      },
      (err)=> console.error(err)
    );
  }
}
