import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';
import { EstalogueadoService } from '../estalogueado.service';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-seccion-mujeres',
  templateUrl: './seccion-mujeres.component.html',
  styleUrls: ['./seccion-mujeres.component.css']
})
export class SeccionMujeresComponent implements OnInit {


  constructor(private dialog:MatDialog, private apiService: ApiService, private estalogueadoService: EstalogueadoService) { }

  protected lItemRopa:ItemRopa[] = [];
  
  ngOnInit(): void {
    this.GetItems(this.apiService);
    this.apiService.cambioHombre.subscribe(apiService => {
      this.GetItems(apiService);
    });
  }
  GetItems(apiService: ApiService){
    let obj:Observable<any> = apiService.Mujer_GetItems();
    obj.subscribe((dato:any)=>{
      this.lItemRopa = dato;
    });
  }

  
}
