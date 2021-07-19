import {Producto} from "../models/producto";
import {Factura} from "../models/factura";
export interface Detalle{
    detalleId?:number
    cantidad:number
    precio:number
    producto:Producto[]
    factura:Factura[]
}