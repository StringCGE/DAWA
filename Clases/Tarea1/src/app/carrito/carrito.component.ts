import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarNovedadesComponent } from '../agregar-novedades/agregar-novedades.component';
import { NovedadesInterface } from '../interfaces/NovedadesInterface';
import { ModificarNovedadesComponent} from "../modificar-novedades/modificar-novedades.component";
import { Novedades} from "../Novedades";
import { ItemRopa } from '../clase/item-ropa'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  dataSource: any = [];
  displayedColumns: string[] = ['id','img', 'nombre', 'precio','cantidad','suma','opciones']
  data: ItemRopa[];
  
  nuevoNovedades:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog) { 
    
    /*this.data = [{
      id: '1',      
      marca: 'Nike',
      descripcion: 'Nike lanza los zapatos deportivos Mambacita Sweet 16 en homenaje a Gianna Bryant por su cumpleaños.',
      anio: 2022
    }
  ];*/
  this.data = [
    {id:1, nombre:"Gracias",precio:29.00, stock:13, srcimg:"../../assets/img/seccion-hombre/item_01.jpg", cantidad:13},
    {id:2, nombre:"Roopa",  precio:35.50, stock:22, srcimg:"../../assets/img/seccion-hombre/item_02.jpg", cantidad:22},
    {id:3, nombre:"Roopa",  precio:59.99, stock:145,srcimg:"../../assets/img/seccion-hombre/item_03.jpg", cantidad:145},
    {id:4, nombre:"Roopa",  precio:45.00, stock:48, srcimg:"../../assets/img/seccion-hombre/item_04.jpg", cantidad:48},
    {id:5, nombre:"Roopa",  precio:35.99, stock:74, srcimg:"../../assets/img/seccion-hombre/item_05.jpg", cantidad:74},
    {id:6, nombre:"Roopa",  precio:25.99, stock:62, srcimg:"../../assets/img/seccion-hombre/item_06.jpg", cantidad:62},
    {id:7, nombre:"Roopa",  precio:15.99, stock:50, srcimg:"../../assets/img/seccion-hombre/item_07.jpg", cantidad:50},
    {id:8, nombre:"Roopa",  precio:5.99,  stock:70, srcimg:"../../assets/img/seccion-hombre/item_08.jpg", cantidad:70},
    {id:9, nombre:"Roopa",  precio:0.99,  stock:28, srcimg:"../../assets/img/seccion-hombre/item_09.jpg", cantidad:28},
    {id:10,nombre:"Roopa",  precio:0.09,  stock:80, srcimg:"../../assets/img/seccion-hombre/item_10.jpg", cantidad:80}
  ];
    // this.nav = this.router.getCurrentNavigation();
    // this.nuevoNovedades = this.nav.extras.state;
  
    // if (this.nuevoNovedades != null)
    // {
    //   console.log(this.nuevoNovedades.datosNovedades.queryParams);
    //   switch (this.nuevoNovedades.datosNovedades.queryParams.tipo){
    //     case "agregar":
    //       this.data.push(this.nuevoNovedades.datosNovedades.queryParams);
    //       break;
    //     case "modificar":
    //       console.log("modificar");
    //       let nove = this.nuevoNovedades.datosNovedades.queryParams;
    //       let index = this.data.findIndex((c:Novedades)=>{
    //         return c.id == nove.id;
    //       });
    //       this.data[index] = {
    //         id: nove.id,
    //         marca: nove.marca,
    //         descripcion: nove.descripcion,
    //         anio: nove.anio
    //       };
    //       break;
    //   }
    // }
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ItemRopa>(this.data as ItemRopa[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    // this.dialog.open(AgregarNovedadesComponent, {
    //   width: '50%',
    // })
  }

  openDialogModificar(nove:any){
    // console.log("openDialog");
    // this.dialog.open(ModificarNovedadesComponent, {
    //   data:{
    //     usuarioModificar: {
    //       id: nove.id,
    //       marca: nove.marca,
    //       descripcion: nove.descripcion,
    //       anio: nove.anio
    //     }
    //   },
    //   width: '50%',
    // })
  }

  buscarnovedades($event: any){
    this.dataSource.filter = $event.target.value;
    console.log("event");
  }
}
