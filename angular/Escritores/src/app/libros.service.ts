import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db';
import { Libro } from './models/libros.model';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor() {}

  getByEscritorId(pEscritorId: number): Promise<Libro[]>{
    return new Promise((resolve, reject)=>{
      const arrFiltrado = LIBROS.filter(libro=>{
        return libro.escritor===pEscritorId;
      })
      resolve(arrFiltrado)
    })
  }
}
