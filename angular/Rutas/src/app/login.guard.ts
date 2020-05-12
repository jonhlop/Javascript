import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

//esta clase la puedes inyectar donde quieras, es mu7y util con datos
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate() {
    console.log('Hemos pasado por guard');
    return true;
  }
}
