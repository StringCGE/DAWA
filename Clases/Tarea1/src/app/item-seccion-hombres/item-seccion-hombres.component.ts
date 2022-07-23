import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-seccion-hombres',
  templateUrl: './item-seccion-hombres.component.html',
  styleUrls: ['./item-seccion-hombres.component.css']
})
export class ItemSeccionHombresComponent implements OnInit {

  constructor() { }
  @Input() itemNombre: string;
  @Input() itemPrecio: number;
  @Input() itemID: number;
  @Input() itemStock: number;
  @Input() itemsrcimg: string;
  itemCantidad: number;

  ngOnInit(): void {
  }

}
