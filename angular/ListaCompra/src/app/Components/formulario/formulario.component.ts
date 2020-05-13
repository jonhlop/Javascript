import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() productoEnviado: EventEmitter<Producto>;
  producto: Producto;

  constructor() {
    this.producto = new Producto();
    this.productoEnviado = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick() {
    console.log(this.producto);
    this.productoEnviado.emit(this.producto);
    this.producto = new Producto();
  }
}
