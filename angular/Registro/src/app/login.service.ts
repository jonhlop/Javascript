import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string;
  constructor(private httpCliente: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io/';
  }

  getBoton(): Promise<any> {
    return this.httpCliente.get(`${this.baseUrl}premio`).toPromise();
  }

  peticionPost(pFormValues): Promise<any> {
   
    return this.httpCliente.post<any>(`${this.baseUrl}register`, pFormValues).toPromise();
  }
}
