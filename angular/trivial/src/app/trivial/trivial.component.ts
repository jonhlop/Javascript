import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import { Pregunta } from '../models/pregunta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {

  preguntaActiva: Pregunta;
  mensaje: string;

  constructor(private preguntasService: PreguntasService, private router: Router) {
    this.mensaje = 'Selecciona tu respuesta';
  }

  ngOnInit(): void {
    this.preguntasService.getPreguntaActual()
      .then(pregunta => {
        this.preguntaActiva = pregunta;
      })
  }

  onRespuestaSeleccionada($event) {
    // if (this.preguntaActiva.respuestaCorrecta === $event) {
    //   this.preguntasService.modificarAciertos(true);
    // } else {
    //   this.preguntasService.modificarAciertos(false);
    // }
    const acierto = this.preguntaActiva.respuestaCorrecta === $event;

    this.mensaje = acierto ? 'Respuesta CORRECTA' : 'Respuesta ERRONEA';

    this.preguntasService.modificarAciertos(acierto);

    setTimeout(async () => {
      this.preguntasService.modificarPreguntaActual();
      this.preguntaActiva = await this.preguntasService.getPreguntaActual();
      if (!this.preguntaActiva) {
        console.log('FINALIZA TRIVIAL');
        this.router.navigate(['/resultado']);
      }
      this.mensaje = 'Selecciona tu respuesta';
    }, 3000);

  }

}
