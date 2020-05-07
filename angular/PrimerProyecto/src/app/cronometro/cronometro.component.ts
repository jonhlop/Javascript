import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  //cuidado con el tipo de los input suele ser string
  @Input() inicio: string;
  @Input() fin: string;

  contador: number;

  constructor() {
    this.contador = Math.round(Math.random() * 20 + 5);
    //En el constructor todavia nop tenemos los valores de los input
  }

  ngOnInit(): void {
    //Aqu ya tenemos los valores de los input
    if (this.inicio) this.contador = parseInt(this.inicio);
  }

  arrancaContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador == parseInt(this.fin)) clearInterval(interval);
    }, 1000);
  }
}
