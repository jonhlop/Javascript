import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuarios: User[];

  constructor() {
    console.log('Arranca el Servicio');
    this.usuarios = [
      new User('Mario', 'Girón', 'mariogiron', '12345', 'mario@neoland.es', 32, true),
      new User('Pedro', 'García', 'pedrito', '332211', 'pedro@neoland.es', 56, true),
      new User('Rosa', 'Martínez', 'rosam', '111111', 'rosa@neoland.es', 17, false),
      new User('Amparo', 'Robles', 'amparito', 'admin123', 'amparo@neoland.es', 64, true)
    ]
  }

  getAll(): User[] {
    return this.usuarios;
  }

}
