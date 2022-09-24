import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarNovedadesComponent } from '../agregar-novedades/agregar-novedades.component';
import { NovedadesInterface } from '../interfaces/NovedadesInterface';
import { ModificarNovedadesComponent} from "../modificar-novedades/modificar-novedades.component";
import { Novedades} from "../Novedades";
import { ApiService } from '../api.service';
import { ItemRopaCarrito } from '../clase/item-ropa-carrito';
import { ItemRopa } from '../clase/item-ropa';
import { ItemRopaCarritoInterface } from '../interfaces/item-ropa-carrito-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  dataSource: any = [];
  displayedColumns: string[] = ['id','img', 'nombre', 'precio','cantidad','suma','opciones']
  dataCarrito: ItemRopaCarrito[];
  data: ItemRopaCarrito[];
  suma:number;
  nuevoNovedades:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, private apiService: ApiService) { 
    
    /*this.data = [{
        id: '1',      
        marca: 'Nike',
        descripcion: 'Nike lanza los zapatos deportivos Mambacita Sweet 16 en homenaje a Gianna Bryant por su cumpleaños.',
        anio: 2022
      }
    ];*/
    // this.data = [
    //   new ItemRopa(1,"Gracias",29.00,13,"../../assets/img/seccion-hombre/item_01.jpg",13),
    //   new ItemRopa(2,"Roopa",35.50,22,"../../assets/img/seccion-hombre/item_02.jpg",22),
    //   new ItemRopa(3,"Roopa",59.99,145,"../../assets/img/seccion-hombre/item_03.jpg",145),
    //   new ItemRopa(4,"Roopa",45.00,48,"../../assets/img/seccion-hombre/item_04.jpg",48),
    //   new ItemRopa(5,"Roopa",35.99,74,"../../assets/img/seccion-hombre/item_05.jpg",74),
    //   new ItemRopa(6,"Roopa",25.99,62,"../../assets/img/seccion-hombre/item_06.jpg",62),
    //   new ItemRopa(7,"Roopa",15.99,50,"../../assets/img/seccion-hombre/item_07.jpg",50),
    //   new ItemRopa(8,"Roopa",5.99,70,"../../assets/img/seccion-hombre/item_08.jpg",70),
    //   new ItemRopa(9,"Roopa",0.99,28,"../../assets/img/seccion-hombre/item_09.jpg",28),
    //   new ItemRopa(10,"Roopa",0.09,80,"../../assets/img/seccion-hombre/item_10.jpg",80)
    // ];
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
    console.log("this.apiService.EstaLogueado()");
    console.log(!this.apiService.EstaLogueado());
    if (!this.apiService.EstaLogueado()){
      console.log("EstaLogueado() en if");
      this.router.navigate(['']);
    }
    
    this.actualizarDataSource();

    // this.apiService.cambioHombre.subscribe(apiService => {
    //   this.actualizarDataSource();
    // });
    this.apiService.cambioCarrito.subscribe(apiService => {
      this.actualizarDataSource();
    });
  }
  actualizarDataSource(){
    
    let obj:Observable<any> = this.apiService.GetProforma();
    obj.subscribe(
      {
        next: (dato:any)=>{
          console.log("GetProforma OK");
          console.log(dato);
/*-------------------------------------------------------*/

let obj:Observable<any> = this.apiService.GetItemsPorProforma();
obj.subscribe(
  {
    next: (dato:any)=>{
      console.log("GetItemPorProforma OK");
      console.log(dato);
      this.data = dato;
      this.dataSource = new MatTableDataSource<ItemRopaCarrito>(this.data as ItemRopaCarrito[]);
      this.actualizarSuma();
    },
    error: (e) => {
      console.log("GetItemPorProforma failure");
      console.log(e);
    },
    complete: () => {

    } 
  }
);

/*-------------------------------------------------------*/
        },
        error: (e) => {
          console.log("GetProforma failure");
          console.log(e);
        },
        complete: () => {
    
        } 
      }
    );
    console.log(this.data);

  }
  actualizarSuma(){
    this.suma = 0;
    this.data.forEach(element => {
      this.suma += element.cantidad * element.item.precio;
    });
  }
  openDialogAgregar(){
    // this.dialog.open(AgregarNovedadesComponent, {
    //   width: '50%',
    // })
  }

  openDialogEliminar(value:ItemRopa){

    let ic : ItemRopaCarritoInterface;
    ic = new ItemRopaCarrito();

    ic.id = value.id;
    ic.cantidad = value.cantidad;
    this.apiService.EliminarItemCarrito(ic);
  }

  buscarnovedades($event: any){
    this.dataSource.filter = $event.target.value;
    console.log("event");
  }
}
