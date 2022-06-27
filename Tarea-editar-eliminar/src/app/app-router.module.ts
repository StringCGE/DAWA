import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";

//import { AgregarClienteComponent } from "./agregar-cliente/agregar-cliente.component";
//import { ModificarClienteComponent } from "./modificar-cliente/modificar-cliente.component";

//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'sesion', component:LoginComponent}/*,

    {path:'cliente/agregar', component:LoginComponent},
    {path:'cliente/modificar', component:LoginComponent}
    */
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}