import { Component, OnInit } from '@angular/core';
import { EstalogueadoService } from "../estalogueado.service";

@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.css']
})
export class PageInicialComponent implements OnInit {

  constructor(
    private estalogueadoService: EstalogueadoService
  ) { }

  ngOnInit(): void {
    this.estalogueadoService.salir();
  }

}
