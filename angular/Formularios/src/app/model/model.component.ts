import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  //etiqueta que va  controlar todo el formulario
  formulario: FormGroup; // genero el objeto y luego lo inicializo en el constructor

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required, //solo si el campo esta relleno
        Validators.minLength(5), // y tiene minimo 3 letras
      ]),
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
      ]),
      dni: new FormControl('', [this.dniValidator]),
      edad: new FormControl('', [this.edadValidator]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/),
      ]),
      repite_password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const emailControl = this.formulario.controls.email;
    emailControl.valueChanges.pipe(debounceTime(700)).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    // Deben devolver NULL si la validacion es correcta
    // devuelvo cualquier otra cosa si la validacion es incorrecta
    const edad = parseInt(control.value);
    if (edad >= 18 && edad <= 65) {
      return null;
    }
  }

  dniValidator(control) {
    const dni = control.value;

    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
      let numero = dni.substr(0, dni.length - 1);
      let letr = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra != letr.toUpperCase()) {
        return { dniValidator: 'La letra no coincide' };
      } else {
        return null; //siempre devolvemos nulo si es correcta la validacion
      }
    } else {
      return { dnivalidator: 'El formato del dni es erroneo' };
    }
  }
}

/**
 * valid - invalid (cumple o no con los validadores)
 * pristine- dirty (no hemos tecleado nada encima | ya hemos tecleado algo)
 * untouched- touched (todavia no he echo el click , hasta que no click en otro lado no se pone touched| tocado)
 */
