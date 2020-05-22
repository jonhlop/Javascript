import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './models/producto.model';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class ShopServiceService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://neolandshop.ngrok.io/items/';
  }

  getProductos(): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl).toPromise();
  }

  getbyCategoria(pCategoria: string): Promise<any[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}/${pCategoria}`)
      .toPromise();
  }

  createCart(): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  addProductCart(pId): Promise<any> {
    const body = {
      item_id: pId,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-token': localStorage.getItem('tokenCarrito'),
      }),
    };
    return this.httpClient
      .post(`${this.baseUrl}new`, body, httpOptions)
      .toPromise();
  }

  getProductosCarrito(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-token': localStorage.getItem('tokenCarrito'),
      }),
    };
    return this.httpClient.get(`${this.baseUrl}/cart`, httpOptions).toPromise();
  }
}
