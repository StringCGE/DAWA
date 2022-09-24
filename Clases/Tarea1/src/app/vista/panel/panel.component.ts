import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    if (!this.apiService.EstaLogueado()){
      this.router.navigate(['']);
    }
  }

}
