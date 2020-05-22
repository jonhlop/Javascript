import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login-dos',
  templateUrl: './login-dos.component.html',
  styleUrls: ['./login-dos.component.css'],
})
export class LoginDosComponent implements OnInit {
  usuario: Usuario[];
  constructor(private usersService: UserService) {
    this.usuario = [];
  }

  ngOnInit(): void {}


  onSubmit(form) {
    console.log(form.value);
    this.usersService.login(form.value.username, form.value.password);
    form.reset();
  }
}
