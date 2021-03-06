import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog, private router: Router) { }

  openOfertas(){
    this.router.navigate(['/ofertas']);
  }

  openHombres(){
    this.router.navigate(['/hombre']);
  }

  openNovedades(){
    this.router.navigate(['/novedades']);
  }
  
  openMujer(){
    this.router.navigate(['/mujer']);
  }
  
  openColecciones(){
    this.router.navigate(['/colecciones']);
  }

  openCarrito(){
    this.router.navigate(['/carrito']);
  }

  openDialogSesion(){
    this.dialog.open(LoginComponent,{data:""});
  }

  ngOnInit(): void {
    /**/
  }

}
