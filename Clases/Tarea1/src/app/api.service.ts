import { EventEmitter, Injectable, Output } from '@angular/core';
import { ItemRopaInterface } from './interfaces/item-ropa-interface';
import { ItemRopaCarritoInterface } from './interfaces/item-ropa-carrito-interface'
import { ItemRopaCarrito } from './clase/item-ropa-carrito'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() change: EventEmitter<ApiService> = new EventEmitter();
  constructor() { }
  protected lItemRopa:ItemRopaCarrito[] = [];

  public AñadirItemCarrito(ir:ItemRopaCarritoInterface){
    this.lItemRopa.push(ir);
    console.log("Añadir a carrito");
    console.log(this.lItemRopa);
  }
  public EliminarItemCarrito(ir:ItemRopaCarritoInterface){
    this.remove(ir);
    console.log("Eliminar de carrito");
    console.log(this.lItemRopa);
  }
  protected remove(ir:ItemRopaCarritoInterface){
    this.lItemRopa =
      this.lItemRopa.filter(function(value_ir) { 
        return value_ir.id !== ir.id 
      });
    /*var arreglo = [1,2,3,4,5];
    var indice = arreglo.indexOf(3); // obtenemos el indice
    arreglo.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
    
    console.log( arreglo );
    var arreglo = [1,2,3,4,5];
    arreglo = arreglo.filter(function(i) { return i !== 3 }); // filtramos
    console.log( arreglo );*/
  }
}
