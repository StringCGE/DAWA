import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<LoginComponent>,
    @ Inject(MAT_DIALOG_DATA) public dir:string,
    private router: Router,
    private estalogueadoService: EstalogueadoService
  ) { }
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)   
  })

  onSubmit(){
    if (this.estalogueadoService.loguear(this.usuario, this.password)){
      alert("Acceso correcto");
      console.log(this.usuarioLogin.value);
      this.router.navigate([this.dir]);
      this.dialogRef.close();
    }else{
      alert("Acceso denegado");
      console.log(this.usuarioLogin.value);
      this.estalogueadoService.salir();
      this.router.navigate(['']);
      this.dialogRef.close();
    }
  }

}
