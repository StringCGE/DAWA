import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class  ModificarClienteComponent implements OnInit {

 

  constructor(private router: Router, private dialogRef: MatDialogRef< ModificarClienteComponent>,
    @ Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    console.log("dialogRef");
    console.log(this.dialogRef);
  }

  //navigationExtras: NavigationExtras={};

  usuarioModificar = new FormGroup({
    cedula: new FormControl(this.data.usuarioModificar.cedula ,Validators.required),
    nombres: new FormControl(this.data.usuarioModificar.nombres,Validators.required),
    apellidos: new FormControl(this.data.usuarioModificar.apellidos, Validators.required),
    direccion: new FormControl(this.data.usuarioModificar.direccion, Validators.required),
    edad: new FormControl(this.data.usuarioModificar.edad, Validators.required)
  })

  onSubmit()
  {
    
    let objToSend: NavigationExtras = {
      queryParams: {
        tipo: "modificar",
        cedula: this.usuarioModificar.value.cedula,
        nombres: this.usuarioModificar.value.nombres,
        apellidos: this.usuarioModificar.value.apellidos,
        direccion: this.usuarioModificar.value.direccion,
        edad: this.usuarioModificar.value.edad
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
