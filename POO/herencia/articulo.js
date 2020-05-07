import Tarea from './tarea.js'

export default class Articulo extends Tarea {
    constructor(pTitulo, pPrioridad, pPrecio, pCantidad = 1) {
        super(pTitulo, pPrioridad.toLowerCase())
        this._precio = pPrecio
        this.cantidad = pCantidad
    }

    get precio() {
        return this._precio;

    }
    set precio(pPrecio) {
        this._precio = pPrecio
    }

    calcularPrecio() {
        return this._precio * this.cantidad
    }















}