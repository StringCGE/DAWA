import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    this.lItemRopa = this.apiService.Mujer_GetItems();
    this.apiService.cambioMujer.subscribe(apiService => {
    this.lItemRopa = apiService.Mujer_GetItems();
    });
  }

  
}
