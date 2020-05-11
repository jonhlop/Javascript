import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css'],
})
export class ComandaComponent implements OnInit {
  @Input() productos: Producto[];

  constructor() {}

  ngOnInit(): void {}

  calcularTotal() {
    let resultado = 0;
    for (let producto of this.productos) {
      resultado += producto.precio;
    }
    return resultado;
  }
  onClickBorrar(pIndice) {
    this.productos.splice(pIndice, 1);
  }
}
