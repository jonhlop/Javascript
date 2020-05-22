import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
    this.usuariosService.login(formValues)
      .then(response =>
        localStorage.setItem('token', response['token']);
        alert('login correcto');
      );
  }

}
