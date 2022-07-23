import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-seccion-hombres',
  templateUrl: './seccion-hombres.component.html',
  styleUrls: ['./seccion-hombres.component.css']
})
export class SeccionHombresComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  
}
