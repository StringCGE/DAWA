import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { ModificarClienteComponent} from "../modificar-cliente/modificar-cliente.component";
import { Cliente, ProbandoCliente} from "../Cliente";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent  implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','direccion','edad','options']
  data: Cliente[];


  
  nuevoCliente:any;
  nav: any;

  /*cedula:any;
  editing:boolean=false;*/

  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.data = [{
      cedula: '0151245245',      
      nombres: 'Andrés Luis',
      apellidos: 'Carvajal Lozano',
      direccion: 'Quito, Ecuador',
      edad: 50
    },
    {
      cedula: '0954658913',      
      nombres: 'Jorge Luis',
      apellidos: 'Charco Aguirre',
      direccion: 'Guayaquil, Ecuador',
      edad: 36
    },
    {
      cedula: '0957962158',      
      nombres: 'Andrea Lisbeth',
      apellidos: 'Romero Haro',
      direccion: 'Guayaquil, Ecuador',
      edad: 45
    }
  ];

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    if (this.nuevoCliente != null)
    {      
      /*console.log(`this.nav.extras.state`);
      console.log(this.nav.extras.state);*/
      console.log(this.nuevoCliente.datosCliente.queryParams);
      switch (this.nuevoCliente.datosCliente.queryParams.tipo){
        case "agregar":
          this.data.push(this.nuevoCliente.datosCliente.queryParams);
          break;
        case "modificar":
          console.log("modificar");
          let clie = this.nuevoCliente.datosCliente.queryParams;
          let index = this.data.findIndex((c:Cliente)=>{
            return c.cedula == clie.cedula;
          });
          this.data[index] = {
            cedula: clie.cedula,
            nombres: clie.nombres,
            apellidos: clie.apellidos,
            direccion: clie.direccion,
            edad: clie.edad
          };
          break;
        /*case "":
          break;
        case "":
          break;*/
      }
    }
    
    
    /*.id=this.activateRoute.snapshot.params['cedula'];
    if(this.id)
    this.editing=true;
    this.nuevoCliente.get().subscribe((data:data[])=>{

    })*/
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  openDialogModificar(clie:any){
    
    console.log("openDialog");
    this.dialog.open(ModificarClienteComponent, {
      data:{
        usuarioModificar: {
          cedula: clie.cedula,
          nombres: clie.nombres,
          apellidos: clie.apellidos,
          direccion: clie.direccion,
          edad: clie.edad
        }
      },
      width: '50%',
    })
  }

  buscarcliente($event: any){
    this.dataSource.filter = $event.target.value;
    console.log("event");
    console.log(event);
  }
}
