import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class EscritoresService {
  constructor() {}

  getAll(): Promise<Escritor[]> {
    const prom = new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
    });
    return prom;
  }
  getById(pId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorEncontrado = ESCRITORES.find((escritor) => {
        return escritor.id === pId;
      });
      resolve(escritorEncontrado);
    });
  }
  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      });
      resolve(arrFiltrado);
    });
  }
}
