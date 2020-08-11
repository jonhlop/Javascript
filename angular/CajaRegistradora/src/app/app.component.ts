import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      new Producto('cocido', 6.54, 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg'),
      new Producto('paella', 12.50, 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/09/Paella-mixta-con-marisco-carne-y-verduras.-Receta-de-arroz-deliciosa.jpg'),
      new Producto('paella', 12.50, 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/09/Paella-mixta-con-marisco-carne-y-verduras.-Receta-de-arroz-deliciosa.jpg')
    ];
    this.arrBebida = [
      new Producto('agua', 3.68, 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201807/05/00118630000141____3__600x600.jpg'),
      new Producto('coca-cola', 1.75, 'https://lh3.googleusercontent.com/proxy/oO437dCthY3gOQuz6dtl6BGTd5jG2ZlnvP5fOE4i8n0eOXUutFYl4ezDIstjDvMNtQ8iIr3a47SBXPY9Qw3qcxwYABa8V5p_KisRPWCW_yqStx0oYnoFNkX49b-S-T4'),
    ];
  }

  onProductoSeleccionado($event) {
    // if (this.productosSeleccionados.includes($event)) {
    //   console.log('Está incluido');
    // } else {
    //   console.log('No está incluido');
    // }

    const productoEncontrado = this.productosSeleccionados.find((producto) => {
      return producto.nombre === $event.nombre;
    });

    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      this.productosSeleccionados.push($event);
    }
    console.log(this.productosSeleccionados);
  }

}
