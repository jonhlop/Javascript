import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SWService {
  baseUrl: string;
  constructor(private httpcliente: HttpClient) {
    this.baseUrl = 'https://swapi.dev/api/planets/?format=json';
  }

  getAllPlanets(): Promise<any> {
    return this.httpcliente.get(this.baseUrl).toPromise();
  }
  getPlanetsByPage(pPage): Promise<any>{
    return this.httpcliente.get(`${this.baseUrl}&page=${pPage}`).toPromise();
  }
}
