import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-headerlogueado',
  templateUrl: './headerlogueado.component.html',
  styleUrls: ['./headerlogueado.component.css']
})
export class HeaderlogueadoComponent implements OnInit {
  
  @Input() usuariologueado = "";

  constructor(private dialog:MatDialog) { }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  ngOnInit(): void {
  }

}
