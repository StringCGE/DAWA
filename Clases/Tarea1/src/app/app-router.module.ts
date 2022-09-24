import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientelogueadoComponent } from "./clientelogueado/clientelogueado.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";
import { NovedadesComponent } from "./novedades/novedades.component";
import { OfertasComponent } from "./ofertas/ofertas.component";

import { ColeccionesComponent } from "./colecciones/colecciones.component";
import { SeccionHombresComponent } from "./seccion-hombres/seccion-hombres.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { MujerComponent } from "./mujer/mujer.component";
import { SeccionMujeresComponent } from "./seccion-mujeres/seccion-mujeres.component";
import { PanelComponent } from "./vista/panel/panel.component";




//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'clientelogueado',component:ClientelogueadoComponent},
    
    {path:'hombre', component: SeccionHombresComponent},
    {path:'mujer', component: SeccionMujeresComponent},
    {path:'ofertas', component: OfertasComponent},
    {path:'colecciones', component: ColeccionesComponent},
    {path:'novedades', component: NovedadesComponent},
    {path:'carrito', component: CarritoComponent},
    {path:'panel', component: PanelComponent},
    
    {path:'sesion', component:LoginComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}