### Generales

- Instalar Bootstrap
- Creación del modelo Pregunta (texto, respuestas, respuestaCorrecta)

### PreguntasService

- Crear y llenar el array de preguntas (arrPreguntas)
- Crear las variables: preguntaActual, preguntasAcertadas y preguntasFalladas
- Todas se inicializan a 0.
- Crear método **getPreguntaActual**

```javascript
this.arrPreguntas[this.preguntaActual]
```

- Crear método **modificarPreguntaActual** - Suma uno a la pregunta actual

### TrivialComponent

- Pedir al servicio la pregunta actual
- Mostrar el texto de la pregunta
- Pasar las respuestas al componente de Respuestas

### RespuestasComponent

- Cuando se pulse en alguna de las respuestas, emitir la información del índice de la respuesta pulsada (@Output). (el index del ngFor)
- Comprobar en el padre si la respuesta es la correcta
    - Si es la correcta, aumentar las preguntas acertadas
    - Si no lo es, aumentar las preguntasFalladas.
    - En cualquiera de los dos casos, cambiar a la pregunta siguiente