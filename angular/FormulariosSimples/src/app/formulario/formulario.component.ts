import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() tareaEnviada: EventEmitter<any>;

  tarea: any;
  constructor() {
    this.tareaEnviada = new EventEmitter();
    this.tarea = {};
  }

  ngOnInit(): void {}

  onClick() {
    console.log(this.tarea);
    this.tareaEnviada.emit(this.tarea);
    this.tarea.mensaje = '';
    this.tarea.descripcion = '';
  }
}
