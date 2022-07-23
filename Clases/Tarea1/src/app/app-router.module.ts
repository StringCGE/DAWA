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




//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'clientelogueado',component:ClientelogueadoComponent},
    {path:'sesion', component:LoginComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'carrito', component: CarritoComponent},

    {path: 'colecciones', component: ColeccionesComponent},
    {path: 'hombre', component: SeccionHombresComponent},
    {path: 'novedades', component: NovedadesComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}