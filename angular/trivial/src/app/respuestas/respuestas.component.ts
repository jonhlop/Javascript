import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  @Input() respuestas: string[];

  @Output() respuestaSeleccionada: EventEmitter<number>;

  constructor() {
    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pIndice) {
    this.respuestaSeleccionada.emit(pIndice);
  }

}
