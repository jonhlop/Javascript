import { Injectable } from '@angular/core';

import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogged: boolean;
  users: Usuario[];

  constructor() {
    this.isLogged = false;
    this.users = [
      { username: 'jack', password: '1234abc' },
      { username: 'mary', password: '4321' },
    ];
  }

  login(pUsername, pPassword) {
    for (let dato of this.users) {
      if (dato.username === pUsername && dato.password === pPassword) {
        this.isLogged = true;
        this.saveLoggedStatus();
      }
    }
  }

  logout() {
    this.isLogged = false;
    this.saveLoggedStatus();
  }

  saveLoggedStatus() {
    localStorage.setItem('isLogin', JSON.stringify(this.isLogged));
  }
}
