import { Component, OnInit } from '@angular/core';
import {UsuariosComponent} from '../usuarios/usuarios.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickUsuario: UsuariosComponent;
  mostrarComponente = false;

  cargarsistemaoperativo(evento) {
    console.log('evento', evento);
    this.mostrarComponente = true;
    if (this.clickUsuario.dioClick.emit(1)) {
      this.mostrarComponente = true;
      console.log(this.clickUsuario);
      return 1;

    } else {
      this.mostrarComponente = false;
      console.log(this.clickUsuario);
      return 0;
    }
  }

}

