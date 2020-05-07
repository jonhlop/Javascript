import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numeros: number[];
  arrPersonas: any[];

  constructor() {
    this.numeros = [1, 23, 45, 43, 45, 67, 65, 655];
    this.arrPersonas = [
      {
        nombre: 'Jonathan',
        apellidos: 'Lopez',
        edad: 34,
        imagen: 'https://thispersondoesnotexist.com/image',
      },
    ];
  }

  onSumaRealizada($event) {
    console.log(`El resultado de la suma es ${$event}`);
  }

  onTerminaContador($event) {
    console.log($event);
  }
  
}
