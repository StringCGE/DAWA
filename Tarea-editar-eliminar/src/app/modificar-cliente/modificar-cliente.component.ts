import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class  ModificarClienteComponent implements OnInit {

 

  constructor(private router: Router, private dialogRef: MatDialogRef< ModificarClienteComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  usuarioModificar = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
       /* cedula: this.usuarioModificar.value.cedula,
        nombres: this.usuarioModificar.value.nombres,
        apellidos: this.usuarioModificar.value.apellidos,
        direccion: this.usuarioModificar.value.direccion,
        edad: this.usuarioModificar.value.edad*/
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
