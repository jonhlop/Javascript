import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged: boolean;
  users: Usuario[];

  constructor() {
    if (localStorage.getItem('isLogged')) {
      this.isLogged = JSON.parse(localStorage.getItem('isLogged'));
    } else {
      this.isLogged = false;
    }

    this.users = [
      { "username": "jack", "password": "1234abc" },
      { "username": "mary", "password": "4321" },
      new Usuario('mario', '12345')
    ]
  }

  login(pUsername, pPassword) {
    let userFound = this.users.find(user => (user.username === pUsername && user.password === pPassword));
    if (userFound) {
      this.isLogged = true;
      this.saveLoggedStatus();
    }
  }

  logout() {
    this.isLogged = false;
    this.saveLoggedStatus();
  }

  saveLoggedStatus() {
    localStorage.setItem('isLogged', JSON.stringify(this.isLogged));
  }

}
