import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuario } from './clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class EstalogueadoService {
  private estalogueado = false;
  @Output() change: EventEmitter<EstalogueadoService> = new EventEmitter();
  public usuario:Usuario;
  public proformaid:number;
  public SetUsuario(usuario:Usuario){
    this.usuario = usuario;
    this.evento();
  }

  public loguear() {
    this.estalogueado = true;
    this.evento();
  }
  // public loguear(usuario : string, psw: string) : boolean {
  //   let bo:boolean = false;
  //   this.lUsuarios.forEach((value)=>{
  //     if(value.email == usuario){
  //       if(value.psw == psw){
  //         bo = true;
  //       }
  //     }
  //   })
  //   if (bo){
  //     this.usuario = usuario;
  //     this.estalogueado = true;
  //     this.evento();
  //     return true;
  //   }
  //   return false;
  // }
  public salir(){
    this.estalogueado = false;
    this.evento();
  }
  private evento(){
    this.change.emit(this);
  }
  public estado() : boolean {
    return this.estalogueado;
  }
  constructor() {
    this.estalogueado = false;
  }
}
