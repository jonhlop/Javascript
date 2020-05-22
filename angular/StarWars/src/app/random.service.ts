import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  /**
   * post https://randomserver.ngrok.io/random/num
   * max:numero maximo
   * min: numero minimo
   */
  constructor(private httpClient: HttpClient) {}

  getRandomNum() {
    const body = {
      max: 50,
      min: 10,
    };
    return this.httpClient.post('https://randomserver.ngrok.io/random/num', body).toPromise();
  }
}
