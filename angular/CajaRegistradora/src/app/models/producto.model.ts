export class Producto {
  nombre: string;
  precio: number;
  imagen: string;

  constructor(pNombre = '', pPrecio = 0.0, pImagen = '') {
    this.nombre = pNombre;
    this.precio = pPrecio;
    this.imagen = pImagen;
  }
  descripcion() {
    return `${this.nombre} ${this.precio}€`;
  }
}
