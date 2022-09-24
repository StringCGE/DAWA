import {ItemRopaCarritoInterface  } from "../interfaces/item-ropa-carrito-interface"
import { ItemRopa } from "./item-ropa";
export class ItemRopaCarrito implements ItemRopaCarritoInterface{
    
    constructor(id?: number, cantidad?: number){
        this.id = id || 0;
        this.cantidad = cantidad || 0;
    }
    id: number;
    cantidad: number;

    facturaid:number;
    factura:any;

    itemid:number;
    item:ItemRopa;
}