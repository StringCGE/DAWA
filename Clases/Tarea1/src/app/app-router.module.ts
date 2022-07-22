import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientelogueadoComponent } from "./clientelogueado/clientelogueado.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";
import { OfertasComponent } from "./ofertas/ofertas.component";
import { ColeccionesComponent } from "./colecciones/colecciones.component";



//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'clientelogueado',component:ClientelogueadoComponent},
    {path:'sesion', component:LoginComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'colecciones', component: ColeccionesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}