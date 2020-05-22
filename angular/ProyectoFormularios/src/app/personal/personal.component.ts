import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux.ts/store';
import { MODIFICA_PERSONAL_DATA, MODIFICA_PORCENTAJE_DATA } from '../redux.ts/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  formPersonal: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
    const personalData = this.ngRedux.getState().personalData
    this.formPersonal = new FormGroup({

      nombre: new FormControl(personalData.nombre, [Validators.required]),
      apellidos: new FormControl(personalData.apellidos, [Validators.required]),
      edad: new FormControl(personalData.edad, [Validators.required]),
      direccion: new FormControl(personalData.direccion, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.ngRedux({
      type: MODIFICA_PORCENTAJE_DATA,
      data: 1,
    });
  }
  onSubmit() {
    console.log(this.formPersonal.value);
    this.ngRedux.dispatch({
      type: MODIFICA_PERSONAL_DATA,
      data: this.formPersonal.value,
    });
    this.router.navigate(['formulario','profesional'])
  }
}
