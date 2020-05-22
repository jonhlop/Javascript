import { Injectable } from '@angular/core';
import { Pregunta } from './models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  arrPreguntas: Pregunta[];
  preguntaActual: number;
  preguntasAcertadas: number;
  preguntasFalladas: number;

  constructor() {
    this.preguntaActual = 0;
    this.preguntasAcertadas = 0;
    this.preguntasFalladas = 0;
    this.arrPreguntas = [
      new Pregunta('Pregunta 1', ['respP11', 'respP12', 'respP13', 'respP14'], 0),
      new Pregunta('Pregunta 2', ['respP21', 'respP22', 'respP23', 'respP24'], 1),
      new Pregunta('Pregunta 3', ['respP31', 'respP32', 'respP33', 'respP34'], 3),
      new Pregunta('Pregunta 4', ['respP41', 'respP42', 'respP43', 'respP44'], 2),
      new Pregunta('Pregunta 5', ['respP51', 'respP52', 'respP53', 'respP54'], 1)
    ]
  }

  getPreguntaActual(): Promise<Pregunta> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPreguntas[this.preguntaActual]);
    })
  }

  modificarPreguntaActual() {
    this.preguntaActual++;
  }

  modificarAciertos(acierto: boolean) {
    if (acierto) {
      this.preguntasAcertadas++;
    } else {
      this.preguntasFalladas++;
    }
    console.log(this.preguntasAcertadas, this.preguntasFalladas);
  }

  mostrarResultado(): any {
    return {
      aciertos: this.preguntasAcertadas,
      fallos: this.preguntasFalladas,
      total: this.arrPreguntas.length
    }
  }
}
