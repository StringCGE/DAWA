import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EstalogueadoService } from "../estalogueado.service";

@Component({
  selector: 'app-headerlogueado',
  templateUrl: './headerlogueado.component.html',
  styleUrls: ['./headerlogueado.component.css']
})
export class HeaderlogueadoComponent implements OnInit {
  
  @Input() usuariologueado = "";

  constructor(
    private router: Router,
    private estalogueadoService: EstalogueadoService
  ) { }

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
  openPanel(){
    this.router.navigate(['/panel']);
  }

  cerrarSesion(){
    this.estalogueadoService.salir();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
