import { Component, OnInit } from '@angular/core';
import { IAppState } from '../redux.ts/store';
import { NgRedux } from '@angular-redux/store';
import {
  MODIFICA_AFICIONES_DATA,
  MODIFICA_PORCENTAJE_DATA,
} from '../redux.ts/action';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-aficiones',
  templateUrl: './aficiones.component.html',
  styleUrls: ['./aficiones.component.css'],
})
export class AficionesComponent implements OnInit {
  aficionesArr: string[];

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.aficionesArr = [];
  }

  ngOnInit(): void {
  
  }

  onChange($event) {
    console.log($event.target.value);
    this.aficionesArr.push($event.target.value);
  }

  onClick() {
    const state = this.ngRedux.getState();
    console.log(state);

    this.ngRedux.dispatch({
      type: MODIFICA_AFICIONES_DATA,
      data: this.aficionesArr,
    });
    const resultado = {
      personal: state.personalData,
      profesional: state.profesionalData,
      aficiones: this.aficionesArr,
    };
    console.log(resultado);
  }
}
