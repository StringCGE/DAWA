import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuario } from './clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class EstalogueadoService {
  private estalogueado = false;
  @Output() change: EventEmitter<EstalogueadoService> = new EventEmitter();
  public usuario = "";

  protected lUsuarios:Usuario[] = [
    new Usuario(1, '0909090901', 'Christian Eduardo', 'Gonzalez', 'La calle y la que cruza', 27, 'eduardo.gonzaleze@ug.edu.ec', 'Christian', 'cliente'),
    new Usuario(2, '0909090902', 'Johann Donato', 'Lucio Vera', 'La calle y la que cruza', 23, 'johann.luciov@ug.edu.ec', 'Johann', 'cliente'),
    new Usuario(3, '0909090903', 'Dennis Orlando', 'Gutiérrez León', 'La calle y la que cruza', 22, 'dennis.gutierrezl@ug.edu.ec', 'Dennis', 'cliente'),
    new Usuario(4, '0909090904', 'James Douglas', 'Cantos Pinto', 'La calle y la que cruza', 21, 'james.cantosp@ug.edu.ec', 'James', 'cliente'),
    new Usuario(5, '0909090905', 'Victor Ivan', 'Espinoza de los Monteros', 'La calle y la que cruza', 20, 'victor.espinozam@ug.edu.ec', 'Victor', 'cliente'),
    new Usuario(6, '0909090901', 'Christian Eduardo', 'Gonzalez', 'La calle y la que cruza', 27, 'eduardogonzaleze@ug.edu.ec', 'Eduardo', 'administrador'),
    new Usuario(7, '0909090902', 'Johann Donato', 'Lucio Vera', 'La calle y la que cruza', 23, 'johann.luciov@ug.edu.ec', 'Donato', 'administrador'),
    new Usuario(8, '0909090903', 'Dennis Orlando', 'Gutiérrez León', 'La calle y la que cruza', 22, 'dennis.gutierrezl@ug.edu.ec', 'Orlando', 'administrador'),
    new Usuario(9, '0909090904', 'James Douglas', 'Cantos Pinto', 'La calle y la que cruza', 21, 'james.cantosp@ug.edu.ec', 'Douglas', 'administrador'),
    new Usuario(10, '0909090905', 'Victor Ivan', 'Espinoza de los Monteros', 'La calle y la que cruza', 20, 'victor.espinozam@ug.edu.ec', 'Ivan', 'administrador')
  ];


  public loguear(usuario : string, psw: string) : boolean {
    let bo:boolean = false;
    this.lUsuarios.forEach((value)=>{
      if(value.email == usuario){
        if(value.psw == psw){
          bo = true;
        }
      }
    })
    if (bo){
      this.usuario = usuario;
      this.estalogueado = true;
      this.evento();
      return true;
    }
    return false;
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
