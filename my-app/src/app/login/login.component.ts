import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Examen de web 2 Bimestre';
  constructor() { }

  ngOnInit() {
  }

  email;
  password;
  passwordConfirmation;

  ingresarUsuario(formulario) {

    const valorActualPassword = formulario
      .controls.password.value;

    const valorActualPasswordConfirmation = formulario.controls.passwordConfirmation.value;

    if (valorActualPassword === valorActualPasswordConfirmation) {
      alert('BIEN!');
    } else {
      alert('Los passwords no son iguales');
      this.password = undefined;
      this.passwordConfirmation = undefined;
    }

  }

}
