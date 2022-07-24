import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '../api.service';
import { ItemRopa } from '../clase/item-ropa';
@Component({
  selector: 'app-seccion-hombres',
  templateUrl: './seccion-hombres.component.html',
  styleUrls: ['./seccion-hombres.component.css']
})
export class SeccionHombresComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  protected lItemRopa:ItemRopa[] = [];
  ngOnInit(): void {
    this.lItemRopa = this.apiService.Hombre_GetItems();
    this.apiService.cambioHombre.subscribe(apiService => {
      this.lItemRopa = apiService.Hombre_GetItems();
    });
  }

  
}
