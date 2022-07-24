import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';
import { EstalogueadoService } from '../estalogueado.service';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  protected lItemRopa:ItemRopa[] = [
    new ItemRopa(101,"Real Madrid C.F. adidas Camiseta de entrenamiento para Hombres",41.00,30,"assets/img/camisa-rm.jpg",0,"GR4324",29),
    new ItemRopa(102,"Condivo 21 Hombre Pantalones cortos",35.00,45,"assets/img/adidas-pants.jpg",0,"GJ6804",19.99),
    new ItemRopa(103,"HEAD Performance Calcetines tobilleros 2 pares",9.99,82,"assets/img/calcetines.jpg",0,"791019001-870",3.50),
    new ItemRopa(104,"Bayern de Múnich Adidas Hombre Pantalones cortos",35.99,156,"assets/img/bayern-pants.jpg",0,"GM5324",22.99),
    new ItemRopa(105,"Adidas Originals Classics Primeblue SST Hombre Chaqueta",45,124,"assets/img/adidas-buzo.jpg",0,"GF0198",30.00),
    new ItemRopa(106,"Adidas Stadium Niño Chaqueta con capucha",45.00,45,"assets/img/adidas-chaqueta-ninio.jpg",0,"H10163",30.00),
    new ItemRopa(107,"PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento",45.00,70,"assets/img/puma-sudadera.jpg",0,"655606-03",20.00),
    new ItemRopa(108,"Jako Striker Mujer Chaqueta de presentación",35.00,152,"assets/img/jako-chaqueta.jpg",0,"D9816-23",21.00),
    new ItemRopa(109,'SportSpar.de "DEALMAKER ONE"',25,38,"assets/img/sneakers.jpg",0,"Sneakers",12.00),
    new ItemRopa(110,"Zeus Mida Pantalones cortos de entrenamiento Marino",35.00,29,"assets/img/zeus-pants.jpg",0,"",30.00),
    new ItemRopa(111,"PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento",27.00,94,"assets/img/puma-sudadera2.jpg",0,"",16.00),
    new ItemRopa(112,"HEAD Hiking Unisex Calcetines tobilleros 2 pares",7.50,45,"assets/img/calcetines-tobilleros.jpg",0,"781001001-857",3.50),
    new ItemRopa(113,"Olympique de Marsella PUMA Niño Camiseta",25.00,23,"assets/img/marsella-shirt.jpg",0,"757046-01",16.00),
    new ItemRopa(114,"Bayer 04 Leverkusen Jako Camiseta",29.00,18,"assets/img/leverkusen-shirt.jpg",0,"BA4221H-681",19.99),
    new ItemRopa(115,"Mizuno Visera J2GW0R05Z-29",15.00,52,"assets/img/visera.jpg",0,"J2GW0R05Z-29",7.00)
  ];

  constructor(private dialog:MatDialog, private apiService: ApiService, private estalogueadoService: EstalogueadoService) { }

  ngOnInit(): void {
  }
  AgregarCarrito(value:ItemRopa){
    if(this.estalogueadoService.estado()){
      let ic : ItemRopaCarritoInterface;
      ic = new ItemRopaCarrito();

      ic.id = value.id;
      ic.cantidad = 1;/*this.itemCantidad;*/
      this.apiService.AñadirItemCarrito(ic);
    }else{
      this.openDialogSesion();
    }
    
  }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

}
