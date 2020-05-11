import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      new Producto(
        'cocido',
        6.54,
        'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'
      ),
      new Producto(
        'paella',
        12.5,
        'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/09/Paella-mixta-con-marisco-carne-y-verduras.-Receta-de-arroz-deliciosa.jpg'
      ),
    ];
    this.arrBebida = [
      new Producto(
        'agua',
        3.68,
        'https://www.kalamazoo.es/content/images/product/55574_1_xnl.jpg'
      ),
      new Producto(
        'coca-cola',
        1.75,
        'https://supercom.es/792-large_default/coca-cola-2l.jpg'
      ),
    ];
  }

  onProductoSeleccionado($event) {
  /*   if (this.productosSeleccionados.includes($event)) {
      console.log('esta incluido');
    } else {
      console.log('no esta ')
    }
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  } */


  
}
