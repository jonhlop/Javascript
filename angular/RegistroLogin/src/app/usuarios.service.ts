import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  getPremio() {
    
    return this.httpClient.get(`${this.baseUrl}/premio`).toPromise();
  }

  register(pFormValues) {
    return this.httpClient.post(`${this.baseUrl}/register`, pFormValues).toPromise();
  }

  login({ username, password }) {
    let body = {
      username,
      password
    }
    return this.httpClient.post(`${this.baseUrl}/login`, body).toPromise();
  }

}
