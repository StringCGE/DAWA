import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
    this.GetItems(this.apiService);
    this.apiService.cambioHombre.subscribe(apiService => {
      this.GetItems(apiService);
    });
  }
  GetItems(apiService: ApiService){
    let obj:Observable<any> = apiService.Coleccion_GetItems();
    obj.subscribe((dato:any)=>{
      this.lItemRopa = dato;
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
