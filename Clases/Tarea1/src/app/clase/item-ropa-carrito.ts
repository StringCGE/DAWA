import {ItemRopaCarritoInterface  } from "../interfaces/item-ropa-carrito-interface"
export class ItemRopaCarrito implements ItemRopaCarritoInterface{
    
    constructor(id?: number, cantidad?: number){
        this.id = id || 0;
        this.cantidad = cantidad || 0;
    }
    id: number;
    cantidad: number;
}