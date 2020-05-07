import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  //Declaracion
  nombre: string;
  identificador: string;

  constructor() {
    //Inicializado
    this.nombre = 'Jonh';
    this.identificador = 'parrafoID';
  }

  ngOnInit(): void {}

  mostrarMensaje(): string {
    return 'Este es mi mensaje';
  }
  pulsarBoton($event) {
    console.log('Se ha pulsado el boton!');
    console.log($event);
  }
  cambiaSelect($event) {
    console.log($event.target.value);
  }
  cambiaTexto($event) {
    this.nombre = $event.target.value;
  }
}
