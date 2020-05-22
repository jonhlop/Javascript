import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux.ts/store';
import { MODIFICA_PROFESIONAL_DATA, MODIFICA_PORCENTAJE_DATA } from '../redux.ts/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css'],
})
export class ProfesionalComponent implements OnInit {
  formProfesional: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
    this.formProfesional = new FormGroup({
      formacion: new FormControl('', [Validators.required]),
      trabajo: new FormControl('', [Validators.required]),
      especialidad: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
   this.ngRedux.dispatch({
     type: MODIFICA_PORCENTAJE_DATA,
     data: 33.33
   })

  }

  onSubmit() {
    this.ngRedux.dispatch({
      type: MODIFICA_PROFESIONAL_DATA,
      data: this.formProfesional.value,
    });
    this.router.navigate(['formulario','aficiones'])
  }
}
