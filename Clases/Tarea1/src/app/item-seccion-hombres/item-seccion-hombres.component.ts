import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';

@Component({
  selector: 'app-item-seccion-hombres',
  templateUrl: './item-seccion-hombres.component.html',
  styleUrls: ['./item-seccion-hombres.component.css']
})
export class ItemSeccionHombresComponent implements OnInit {

  
  @Input() itemNombre: string;
  @Input() itemPrecio: number;
  @Input() itemID: number;
  @Input() itemStock: number;
  @Input() itemsrcimg: string;
  itemCantidad: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  AgregarCarrito(){
    let ic : ItemRopaCarritoInterface;
    ic = new ItemRopaCarrito();

    ic.id = this.itemID;
    ic.cantidad = this.itemCantidad;
    this.apiService.AñadirItemCarrito(ic);
  }
  EliminarCarrito(){
    let ic : ItemRopaCarritoInterface;
    ic = new ItemRopaCarrito();

    ic.id = this.itemID;
    ic.cantidad = this.itemCantidad;
    this.apiService.EliminarItemCarrito(ic);
  }
}
