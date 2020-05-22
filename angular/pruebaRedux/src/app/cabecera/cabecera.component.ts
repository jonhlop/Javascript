import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../store';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  cont: number;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.cont = 0;
  }

  ngOnInit(): void {
    const state = this.ngRedux.getState();
    this.cont = state.contador;
  }
}
