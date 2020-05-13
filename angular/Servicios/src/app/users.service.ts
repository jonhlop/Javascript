import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usuarios: User[];

  constructor() {
    console.log('Arranca el Servicio');
    this.usuarios = [
      new User(
        'Mario',
        'Girón',
        'mariogiron',
        '12345',
        'mario@neoland.es',
        32,
        false
      ),
      new User(
        'Pedro',
        'García',
        'pedrito',
        '332211',
        'pedro@neoland.es',
        56,
        true
      ),
      new User(
        'Rosa',
        'Martínez',
        'rosam',
        '111111',
        'rosa@neoland.es',
        17,
        false
      ),
      new User(
        'Amparo',
        'Robles',
        'amparito',
        'admin123',
        'amparo@neoland.es',
        64,
        true
      ),
      new User(
        'Jose',
        'Perez',
        'Jperez',
        'admin123',
        'Jose@neoland.es',
        18,
        true
      ),
    ];
  }

  getAll(): User[] {
    return this.usuarios;
  }
  getAllPromise(): Promise<User[]> {
    //creamos la promesa
    const prom = new Promise<User[]>((resolve, reject) => {
      resolve(this.usuarios);
    });
    return prom;
  }

  getActive(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      const arrFiltrado: User[] = [];
      for (let usuario of this.usuarios) {
        if (usuario.activo) {
          arrFiltrado.push(usuario);
        }
      }
      resolve(arrFiltrado);
    });
  }
  getActivosV2(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.usuarios.filter((usuario) => {
        return usuario.activo;
      });
      resolve(arrFiltrado);
    });
  }

  getMayoresEdad(): Promise<User[]> {
    return Promise.resolve(
      this.usuarios.filter((usuario) => usuario.edad >= 18)
    );
  }
  /**
   * Filtra a partir del nombre de usuario
   * @param pUsername nombre de usuario a partir del cual quiero filtrar
   * @returns una promesa, la cual resuelve a un array de user
   */
  getByUsername(pUsername: string): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      const arrFiltrado = this.usuarios.filter((usuario) => {
        const username = usuario.username.toLowerCase();
        const estaIncluido = username.includes(pUsername.toLowerCase());
        return estaIncluido;
      });
      resolve(arrFiltrado);
    });
  }

  getByNombreCompleto(pNombre: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const nombreCompleto = pNombre.toLowerCase().replace(/ /g, '');
      const arrFiltrado = this.usuarios.filter((usuario) => {
        const usuarioNombreCompleto = usuario.nombre + usuario.apellidos;
        const usuarioNombreCompletoSinEspacio = usuarioNombreCompleto
          .toLowerCase()
          .replace(/ /g, '');
        return usuarioNombreCompletoSinEspacio.includes(nombreCompleto);
      });
      resolve(arrFiltrado);
    });
  }

  getEmails(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const arrEmails = [];
      for (let usuario of this.usuarios) {
        arrEmails.push(usuario.email);
      }
      resolve(arrEmails);
    });
  }

  addUser({
    nombre,
    apellidos,
    email,
    edad,
    activo,
    username,
    password,
  }): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const newUser = new User(
        nombre,
        apellidos,
        email,
        edad,
        activo,
        username,
        password
      );
      this.usuarios.push(newUser);
      resolve(this.usuarios)
    });
  }
}
