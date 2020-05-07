import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mensaje: string;
  persona: any;

  constructor() {
    this.persona = {};
  }
  onClick() {
    this.mensaje = 'Mensaje al pulsar el boton';
  }
}
