import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }
  @Output() dioClick = new EventEmitter();
  ngOnInit() {
  }

  clickVisitar() {
    this.dioClick.emit(1);
  }

}

