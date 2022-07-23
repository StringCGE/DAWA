import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-novedades',
  templateUrl: './agregar-novedades.component.html',
  styleUrls: ['./agregar-novedades.component.css']
})

export class AgregarNovedadesComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarNovedadesComponent>) { }

  ngOnInit(): void {
  }
  usuarioNuevo = new FormGroup({
    id: new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    descripcion: new FormControl('', Validators.required),
    anio: new FormControl('', Validators.required)
  })
  
  onSubmit(){
    let objToSend: NavigationExtras = {
      queryParams: {
        tipo: "agregar",
        id: this.usuarioNuevo.value.id,
        marca: this.usuarioNuevo.value.marca,
        descripcion: this.usuarioNuevo.value.descripcion,
        anio: this.usuarioNuevo.value.anio
      },
      skipLocationChange: false,
      fragment: 'top' 
    };
    this.dialogRef.close(); 
    this.redirectTo('/novedades', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(()=>
      this.router.navigate([uri],{ state: { datosNovedades: objToSend}})
    );
  }

  cancelar(){
    this.dialogRef.close(); 
  }
}
