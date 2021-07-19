import {Cliente} from "../models/cliente"
export interface Factura{
     id?:number
    fechaFactura?:string   
    cliente: Cliente[]
}
