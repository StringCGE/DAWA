import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstalogueadoService {
  private estalogueado = false;
  @Output() change: EventEmitter<EstalogueadoService> = new EventEmitter();
  public usuario = "";
  public logear(usuario : string){
    this.usuario = usuario;
    this.estalogueado = true;
    this.evento();
  }
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
