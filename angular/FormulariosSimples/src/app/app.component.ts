import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mensaje: string;
  persona: any;

  arrTareas: any[];

  constructor() {
    this.persona = {};
    this.arrTareas = [];
  }
  onClick() {
    this.mensaje = 'Mensaje al pulsar el boton';
  }
  onTareaEnviada($event) {
    console.log($event);
    /* let tareaTemp = {
      mensaje: $event.mensaje,
      descripcion: $event.descripcion,
    }; */

    let tareaTemp = {...$event};
    this.arrTareas.push(tareaTemp);
    console.log(this.arrTareas);
  }
}
