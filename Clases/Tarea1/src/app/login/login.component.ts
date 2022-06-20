import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  usuario:string;
  password:string;

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)   
  })

  onSubmit(){
    if (this.usuario =='admin' && this.password =='admin'){
      alert("Acceso correcto");
    }else
      alert("Acceso denegado");

    console.log(this.usuarioLogin.value)
    this.router.navigate(['/cliente']);
    this.dialogRef.close(); 
  }

}
