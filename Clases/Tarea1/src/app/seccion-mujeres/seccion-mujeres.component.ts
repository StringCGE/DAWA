
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
@Component({
  selector: 'app-seccion-mujeres',
  templateUrl: './seccion-mujeres.component.html',
  styleUrls: ['./seccion-mujeres.component.css']
})
export class SeccionMujeresComponent implements OnInit {

  constructor(private apiService: ApiService,
              private router: Router) { }
  protected lItemRopa:ItemRopa[] = [
    new ItemRopa(1,"Calentador",23.00,20,"../../assets/img/seccion-mujer/item_01.png",13),
    new ItemRopa(2,"Chompa",40.99,10,"../../assets/img/seccion-mujer/item_02.png",22),
    new ItemRopa(3,"Calentador",30.00,20,"../../assets/img/seccion-mujer/item_03.png",145),
    new ItemRopa(4,"Abrigo",50.00,48,"../../assets/img/seccion-mujer/item_04.png",48),
    new ItemRopa(5,"Camisa de la seleccion",60.99,120,"../../assets/img/seccion-mujer/item_05.png",74),
    new ItemRopa(6,"Chompa",30.00,24,"../../assets/img/seccion-mujer/item_06.png",62),
    new ItemRopa(7,"Camisa Barcelona",15.99,35,"../../assets/img/seccion-mujer/item_07.png",50),
    new ItemRopa(8,"Camisa",15.99,60,"../../assets/img/seccion-mujer/item_08.png",70),
    new ItemRopa(9,"Calentador",25.50,10,"../../assets/img/seccion-mujer/item_09.png",28),
    new ItemRopa(10,"Chompa",35.99,12,"../../assets/img/seccion-mujer/item_10.png",80),
    new ItemRopa(11,"Chompa",25.50,10,"../../assets/img/seccion-mujer/item_11.png",28),
    new ItemRopa(12,"Short",35.99,12,"../../assets/img/seccion-mujer/item_12.png",80)
  ];
  ngOnInit(): void {
  }

  
}
