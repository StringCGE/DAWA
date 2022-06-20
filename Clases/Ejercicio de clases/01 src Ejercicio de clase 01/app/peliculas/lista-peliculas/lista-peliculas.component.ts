import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  constructor() { }
  
  //Movies: { nombrePelicula: string; Director: string; fechaLanzamiento: Date; precio: number; }[] | undefined;
  @Input()
  Movies: any;

  eliminar(index:number)
  {
    this.Movies.splice(index,1);
  }

  ngOnInit(): void {
    //setTimeout(()=> {
    //  this.Movies=[{
    //    nombrePelicula: 'IronMan1',
    //    Director: 'Marvel',
    //    fechaLanzamiento: new Date("02-10-2010"),
    //    precio: 14.99
    //  },
    //  {
    //    nombrePelicula: 'IronMan2',
    //    Director: 'Marvel',
    //    fechaLanzamiento: new Date("02-10-2014"),
    //    precio: 20.50
    //  },
    //  {
    //    nombrePelicula: 'IronMan3',
    //    Director: 'Marvel',
    //    fechaLanzamiento: new Date("02-10-2017"),
    //    precio: 41.58
    //  }
    //];
    //
    //},2000);

  }



}
