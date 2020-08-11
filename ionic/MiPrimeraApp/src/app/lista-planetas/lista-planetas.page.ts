import { Component, OnInit } from "@angular/core";
import { IonicService } from "../ionic.service";

@Component({
  selector: "app-lista-planetas",
  templateUrl: "./lista-planetas.page.html",
  styleUrls: ["./lista-planetas.page.scss"],
})
export class ListaPlanetasPage implements OnInit {
  planets: any[];

  constructor(private listaService: IonicService) {}

  ngOnInit() {
    this.listaService.getPlanets().then((response) => {
      console.log(response);
      this.planets = response.results;
    });
  }
}
