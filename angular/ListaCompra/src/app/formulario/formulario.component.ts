import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() productoEnviado: EventEmitter<Producto>;

  prod: Producto;

  constructor() {
    this.prod = new Producto('', 1, 'panaderia');
    this.productoEnviado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.productoEnviado.emit(this.prod);
    this.prod = new Producto();
  }

}
