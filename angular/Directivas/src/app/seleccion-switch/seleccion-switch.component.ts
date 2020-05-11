import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-switch',
  templateUrl: './seleccion-switch.component.html',
  styleUrls: ['./seleccion-switch.component.css'],
})
export class SeleccionSwitchComponent implements OnInit {
  numProductos: number;

  constructor() {
    this.numProductos = 1;
  }

  ngOnInit(): void {}
}
