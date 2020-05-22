import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  objResultado: any;

  constructor(private preguntasService: PreguntasService) {
    this.objResultado = {};
  }

  ngOnInit() {
    this.objResultado = this.preguntasService.mostrarResultado();
  }

}
