import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class IonicService {
  constructor(private HttpClient: HttpClient) {}

  getPlanets(): Promise<any> {
    return this.HttpClient.get("https://swapi.dev/api/planets").toPromise();
  }
}
