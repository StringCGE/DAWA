import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  movies80: any;

  ngOnInit(): void {
    
    this.movies80 = [{
        nombrePelicula: 'Titanic',
        director: 'James Cameron',
        fechaLanzamiento: new Date('10-05-1995'),
        precio: 50
      },
      {
        nombrePelicula: 'Avatar',
        director: 'James Cameron',
        fechaLanzamiento: new Date('12-01-2002'),
        precio: 30
      },
      {
        nombrePelicula: 'Volver a Futuro III',
        director: 'James Cameron',
        fechaLanzamiento: new Date('10-17-1990'),
        precio: 25
      }
    ];
  }

  title = 'Introducción';
  subtitle = 'Primer paso';
  msg_output ='Nos vamos al mundial!';
  
  duplicarNumero(valor:number)
  {
    return valor*2;
  }

}
