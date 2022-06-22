import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientelogueadoComponent } from "./clientelogueado/clientelogueado.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";


//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'clientelogueado',component:ClientelogueadoComponent},
    {path:'sesion', component:LoginComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}