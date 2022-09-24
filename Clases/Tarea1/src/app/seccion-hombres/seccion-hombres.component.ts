import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
@Component({
  selector: 'app-seccion-hombres',
  templateUrl: './seccion-hombres.component.html',
  styleUrls: ['./seccion-hombres.component.css']
})
export class SeccionHombresComponent implements OnInit {

  constructor(private apiService: ApiService,
              private router: Router) { }
  protected lItemRopa:ItemRopa[] = [];

  ngOnInit(): void {
    this.GetItems(this.apiService);
    this.apiService.cambioHombre.subscribe(apiService => {
      this.GetItems(apiService);
    });
  }
  GetItems(apiService: ApiService){
    let obj:Observable<any> = apiService.Hombre_GetItems();
    obj.subscribe((dato:any)=>{
      this.lItemRopa = dato;
    });
  }

  onLogin(miform:any){
    
  }
}
