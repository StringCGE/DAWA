import { Component } from '@angular/core';
import { EstalogueadoService } from "./estalogueado.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ClienteFrontEnd';
  logueado = 'no';
  usuario = "";

  constructor(
    private estalogueadoService: EstalogueadoService
  ) { 
    /*if(estalogueadoService.estado()){
      this.logueado = 'yes';
    }else{
      this.logueado = 'no';
    }*/
    this.estalogueadoService.salir();
  }
  ngOnInit() {
    this.estalogueadoService.change.subscribe(estalogueadoService => {
      if(estalogueadoService.estado()){
        this.logueado = 'yes';
        this.usuario = estalogueadoService.usuario
      }else{
        this.logueado = 'no';
      }
    });
  }


}
