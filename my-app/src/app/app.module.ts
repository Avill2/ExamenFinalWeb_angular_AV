import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {RouterLink, RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.routes';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';
import { PeticionTransferenciaComponent } from './peticion-transferencia/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './seleccion-transferencia/seleccion-transferencia.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusquedaComponent,
    UsuariosComponent,
    SistemaOperativoComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    AplicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
