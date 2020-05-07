import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  //cuidado con el tipo de los input suele ser string
  @Input() inicio: string;
  @Input() fin: string;

  @Output() terminaContador: EventEmitter<string>;

  contador: number;

  constructor() {
    this.contador = Math.round(Math.random() * 20 + 5);
    //En el constructor todavia nop tenemos los valores de los input
    this.terminaContador = new EventEmitter();
  }

  ngOnInit(): void {
    //Aqu ya tenemos los valores de los input
    if (this.inicio) this.contador = parseInt(this.inicio);
  }

  arrancaContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador == parseInt(this.fin)) {
        clearInterval(interval);
        this.terminaContador.emit('El Cronometro ha terminado');
      }
    }, 1000);
  }
}
