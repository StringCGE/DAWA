import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {HeaderlogueadoComponent } from './headerlogueado/headerlogueado.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PageInicialComponent } from './page-inicial/page-inicial.component'
import { MatTableModule } from '@angular/material/table';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { SeccionHombresComponent } from './seccion-hombres/seccion-hombres.component';
import { ItemSeccionHombresComponent } from './item-seccion-hombres/item-seccion-hombres.component';
import { NovedadesComponent } from './novedades/novedades.component';

import { AgregarNovedadesComponent } from './agregar-novedades/agregar-novedades.component';
import { ModificarNovedadesComponent } from './modificar-novedades/modificar-novedades.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageInicialComponent,
    HeaderlogueadoComponent,
    OfertasComponent,ColeccionesComponent,
    SeccionHombresComponent,
    ItemSeccionHombresComponent,
    NovedadesComponent,
    AgregarNovedadesComponent,
    ModificarNovedadesComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, FormsModule,
    MatMenuModule, MatGridListModule, MatTableModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
