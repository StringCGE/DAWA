import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Usuario } from './clase/usuario';
import { EstalogueadoService } from "./estalogueado.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ClienteFrontEnd';
  logueado = 'no';
  usuario:string = "";

  constructor(
    private estalogueadoService: EstalogueadoService,
    private apiservice:ApiService
  ) { 
    if(estalogueadoService.estado()){
      this.logueado = 'yes';
    }else{
      this.logueado = 'no';
    }
    //this.estalogueadoService.salir();
    
  }
  ngOnInit() {
    this.estalogueadoService.change.subscribe(estalogueadoService => {
      if(estalogueadoService.estado()){
        this.logueado = 'yes';
        console.log("Desde AppComponent");
        if(estalogueadoService.usuario != null){
          this.usuario = estalogueadoService.usuario.nombres + ' ' + estalogueadoService.usuario.apellidos
        }else{
          this.usuario = "Usuario"
        }
      }else{
        this.logueado = 'no';
      }
    });
    this.apiservice.cambio_login.subscribe(apiservice => {
        console.log("Desde AppComponent apiservices");
        if(apiservice.usuario != null){
          this.usuario = apiservice.usuario.nombres + ' ' + apiservice.usuario.apellidos
        }else{
          this.usuario = ""
        }
    });
  }


}
