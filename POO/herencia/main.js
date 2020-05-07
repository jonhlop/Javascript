import Articulo from './articulo.js'
import Tarea from './tarea.js'

const articulo1 = new Articulo('Jabon de manos', 'urgente', 1.20, 2)
const tarea1 = new Tarea('Ir a la compra', 'Mensual')

articulo1.precio = 3
console.log(articulo1.calcularPrecio());
articulo1.mostrarTarea();