import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';
import { EstalogueadoService } from '../estalogueado.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-seccion-mujeres',
  templateUrl: './item-seccion-mujeres.component.html',
  styleUrls: ['./item-seccion-mujeres.component.css']
})
export class ItemSeccionMujeresComponent implements OnInit {

  
  @Input() itemNombre: string; 
  @Input() itemPrecio: number; 
  @Input() itemID: number; 
  @Input() itemStock: number; 
  @Input() itemsrcimg: string; 
  itemCantidad: number; 

  constructor(private dialog:MatDialog,
              private apiService: ApiService,
              private estalogueadoService: EstalogueadoService,
              private router: Router) { }

  ngOnInit(): void {
  }
  AgregarCarrito(){
    if(this.estalogueadoService.estado()){
      let ic : ItemRopaCarritoInterface;
      ic = new ItemRopaCarrito();

      ic.id = this.itemID;
      ic.cantidad = this.itemCantidad;
      this.apiService.AñadirItemCarrito(ic);
    }else{
      this.openDialogSesion();
    }
    
  }

  openDialogSesion(){
    const dialogo1 = this.dialog.open(LoginComponent, {data:"mujer"});
  }

  EliminarCarrito(){
    if(this.estalogueadoService.estado()){
      let ic : ItemRopaCarritoInterface;
      ic = new ItemRopaCarrito();

      ic.id = this.itemID;
      ic.cantidad = this.itemCantidad;
      this.apiService.EliminarItemCarrito(ic);
    }else{
      this.openDialogSesion();
    }
  }
}
