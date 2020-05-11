import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  @Input() titulo: string;
  @Input() productos: Producto;

  @Output() productoSeleccionado: EventEmitter<Producto>; //1. declaramos el output

  constructor() {
    this.productoSeleccionado = new EventEmitter(); //2.lo inicializamos en el constrcutor
  }

  ngOnInit(): void {}

  onClick(pProducto: Producto) {
    //3.lanzar el output - emitir
    this.productoSeleccionado.emit(pProducto);
  }
}
