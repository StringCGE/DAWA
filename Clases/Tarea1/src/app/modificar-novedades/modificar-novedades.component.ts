import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-novedades',
  templateUrl: './modificar-novedades.component.html',
  styleUrls: ['./modificar-novedades.component.css']
})

export class  ModificarNovedadesComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef< ModificarNovedadesComponent>,
    @ Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    console.log("dialogRef");
    console.log(this.dialogRef);
  }

  usuarioModificar = new FormGroup({
    id: new FormControl(this.data.usuarioModificar.id ,Validators.required),
    marca: new FormControl(this.data.usuarioModificar.marca,Validators.required),
    descripcion: new FormControl(this.data.usuarioModificar.descripcion, Validators.required),
    anio: new FormControl(this.data.usuarioModificar.anio, Validators.required)
  })

  onSubmit(){
    let objToSend: NavigationExtras = {
      queryParams: {
        tipo: "modificar",
        id: this.usuarioModificar.value.id,
        marca: this.usuarioModificar.value.marca,
        descripcion: this.usuarioModificar.value.descripcion,
        anio: this.usuarioModificar.value.anio
      },
      skipLocationChange: false,
      fragment: 'top' 
    };
    this.dialogRef.close(); 
    this.redirectTo('/novedades', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosNovedades: objToSend}}));
  }

  cancelar(){
    this.dialogRef.close(); 
  }
}
