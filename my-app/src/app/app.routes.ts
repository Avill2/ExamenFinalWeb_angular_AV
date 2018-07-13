import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {BusquedaComponent} from './busqueda/busqueda.component';


export const RUTAS_APP: Routes = [
  {
    path:'home',
    component: BusquedaComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  }

];
