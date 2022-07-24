import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'
import { MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AgregarNovedadesComponent } from './agregar-novedades/agregar-novedades.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderlogueadoComponent } from './headerlogueado/headerlogueado.component'
import { ItemSeccionHombresComponent } from './item-seccion-hombres/item-seccion-hombres.component';
import { ItemSeccionMujeresComponent } from './item-seccion-mujeres/item-seccion-mujeres.component';
import { LoginComponent } from './login/login.component';
import { ModificarNovedadesComponent } from './modificar-novedades/modificar-novedades.component';
import { MujerComponent } from './mujer/mujer.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { PageInicialComponent } from './page-inicial/page-inicial.component'
import { SeccionHombresComponent } from './seccion-hombres/seccion-hombres.component';
import { SeccionMujeresComponent } from './seccion-mujeres/seccion-mujeres.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    AgregarNovedadesComponent,
    AppComponent,
    CarritoComponent,
    ClientesComponent,
    ColeccionesComponent,
    FooterComponent,
    HeaderComponent,
    HeaderlogueadoComponent,
    ItemSeccionHombresComponent,
    ItemSeccionMujeresComponent,
    LoginComponent,
    ModificarNovedadesComponent,
    MujerComponent,
    NovedadesComponent,
    OfertasComponent,ColeccionesComponent,
    PageInicialComponent,
    SeccionHombresComponent,
    SeccionMujeresComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule, 
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule, 
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
