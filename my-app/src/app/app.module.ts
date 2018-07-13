import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {RouterLink, RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusquedaComponent,
    UsuariosComponent
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
