import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { EstalogueadoService } from "../estalogueado.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  usuario:string;
  password:string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private estalogueadoService: EstalogueadoService
  ) { }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)   
  })

  onSubmit(){
    console.log("onSubmit ");
    if (this.estalogueadoService.loguear(this.usuario, this.password)){
      /*alert("Acceso correcto");*/
      console.log(this.usuarioLogin.value);
      this.router.navigate(['']);
      this.dialogRef.close();
    }else{
      alert("Acceso denegado");
      console.log(this.usuarioLogin.value);
      this.estalogueadoService.salir();
      this.router.navigate(['']);
      this.dialogRef.close();
    }
    console.log("onSubmit 12");
  }

}
