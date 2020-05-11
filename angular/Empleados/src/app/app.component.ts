import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrEmpleados: Empleado[];
  //arrEmpleados: Array<Empleado>

  constructor() {
    this.arrEmpleados = [];
  }

  onEmpleadoNuevo($event: Empleado) {
    console.log($event);
    this.arrEmpleados.push($event);
  }
}
