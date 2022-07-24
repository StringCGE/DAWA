import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  protected lItemRopa:ItemRopa[] = [/* {{itemhombre.nombre}} */
    new ItemRopa(id,"detalle",precio,stock,"src",cantidad,"codigo",preciooferta),
    new ItemRopa(,"",,,"",,"",),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
