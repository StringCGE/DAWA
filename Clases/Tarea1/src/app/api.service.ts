import { EventEmitter, Injectable, Output } from '@angular/core';
import { ItemRopaInterface } from './interfaces/item-ropa-interface';
import { ItemRopaCarritoInterface } from './interfaces/item-ropa-carrito-interface'
import { ItemRopaCarrito } from './clase/item-ropa-carrito'
import { ItemRopa } from './clase/item-ropa'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @Output() change: EventEmitter<ApiService> = new EventEmitter();
  constructor() { }
  protected lItemRopaCarrito:ItemRopaCarrito[] = [];
  protected lItemRopa:ItemRopa[] = [
    new ItemRopa(1,"Gracias",29.00,13,"../../assets/img/seccion-hombre/item_01.jpg",13),
    new ItemRopa(2,"Roopa",35.50,22,"../../assets/img/seccion-hombre/item_02.jpg",22),
    new ItemRopa(3,"Roopa",59.99,145,"../../assets/img/seccion-hombre/item_03.jpg",145),
    new ItemRopa(4,"Roopa",45.00,48,"../../assets/img/seccion-hombre/item_04.jpg",48),
    new ItemRopa(5,"Roopa",35.99,74,"../../assets/img/seccion-hombre/item_05.jpg",74),
    new ItemRopa(6,"Roopa",25.99,62,"../../assets/img/seccion-hombre/item_06.jpg",62),
    new ItemRopa(7,"Roopa",15.99,50,"../../assets/img/seccion-hombre/item_07.jpg",50),
    new ItemRopa(8,"Roopa",5.99,70,"../../assets/img/seccion-hombre/item_08.jpg",70),
    new ItemRopa(9,"Roopa",0.99,28,"../../assets/img/seccion-hombre/item_09.jpg",28),
    new ItemRopa(10,"Roopa",0.09,80,"../../assets/img/seccion-hombre/item_10.jpg",80)
  ];
  public Hombre_GetItems() : ItemRopa[]{
    return this.lItemRopa;
  }

  private evento(){
    this.change.emit(this);
  }

  public AñadirItemCarrito(ir:ItemRopaCarritoInterface){
    this.lItemRopaCarrito.push(ir);
    this.evento();
    console.log("Añadir a carrito");
    console.log(this.lItemRopa);
  }
  public EliminarItemCarrito(ir:ItemRopaCarritoInterface){
    this.remove(ir);
    this.evento();
    console.log("Eliminar de carrito");
    console.log(this.lItemRopa);
  }
  protected remove(ir:ItemRopaCarritoInterface){
    this.lItemRopaCarrito =
      this.lItemRopaCarrito.filter(function(value_ir) { 
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
