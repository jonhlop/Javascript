import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
  }

  onProductoEnviado($event) {
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  }

}
