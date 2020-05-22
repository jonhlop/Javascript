import { Component } from '@angular/core';
import { SWService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'StarWars';
  planetas: any[];
  paginaActual: number;
  numPaginas: number;
  constructor(private swService: SWService) {
    this.paginaActual = 1;
    this.numPaginas = 0;
  }

  async ngOnInit() {
    /* this.swService
      .getAllPlanets()
      .then((response) => {
        console.log(response);
        this.planetas = response.results;
      })
      .catch((err) => console.log(err));
  } */

    const response = await this.swService.getPlanetsByPage(this.paginaActual);
    this.planetas = response.results;
    this.numPaginas = response['count'] / this.planetas.length;
  }
  async changePage(siguiente: boolean) {
    this.paginaActual = siguiente
      ? this.paginaActual + 1
      : this.paginaActual - 1;
     await this.swService.getPlanetsByPage(this.paginaActual);
  }
}
