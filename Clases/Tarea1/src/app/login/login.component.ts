import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
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
    private estalogueadoService: EstalogueadoService,
    private apiService: ApiService
  ) { }
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)   
  })

  onSubmit(miform:any){
    console.log("Login->222");
    let obj:Observable<any> = this.apiService.login(miform);
    obj.subscribe(
      {
        next: (dato:any)=>{
          console.log("Login result");
          console.log(dato);
          let obj:Observable<any> = this.apiService.GetUsuarioByToken();
          obj.subscribe(
            {
              next: (dato:any)=>{
                console.log("Desde getUsuario");
                this.apiService.SetUsuario(dato);
                console.log(this.apiService.usuario);
              },
              error: (e) => {
                console.log("4 error 404");
                console.log(e);
              },
              complete: () => {
          
              } 
            }
          );

          alert("Acceso correcto");

          this.estalogueadoService.loguear();
          this.router.navigate([this.dir]);
          this.dialogRef.close();
        },
        error: (e) => {
          console.log("2 error 404");
          alert("Acceso denegado");
          console.log(this.usuarioLogin.value);
          this.estalogueadoService.salir();
          this.router.navigate(['']);
          this.dialogRef.close();
        },
        complete: () => {
          console.log("logueado/Complete");
        } 
      }
    );
  }
}
