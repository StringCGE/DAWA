import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';
import { EstalogueadoService } from '../estalogueado.service';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {

  constructor(private dialog:MatDialog, private apiService: ApiService, private estalogueadoService: EstalogueadoService) { }

  protected lItemRopa:ItemRopa[] = [];
  ngOnInit(): void {
    this.lItemRopa = this.apiService.Coleccion_GetItems();
    this.apiService.cambioColeccion.subscribe(apiService => {
      this.lItemRopa = apiService.Coleccion_GetItems();
    });
  }
  AgregarCarrito(value:ItemRopa){
    if(this.estalogueadoService.estado()){
      let ic : ItemRopaCarritoInterface;
      ic = new ItemRopaCarrito();

      ic.id = value.id;
      ic.cantidad = 1;/*this.itemCantidad;*/
      console.log("Añadiendo a carrito");
      console.log(ic);
      this.apiService.AñadirItemCarrito(ic);
    }else{
      this.openDialogSesion();
    }
    
  }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

}
