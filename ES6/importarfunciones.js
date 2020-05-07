
//importar dentro de html
/* 
import {
    sumar,
} from './exportarfunciones.js'

sumar(3, 4) */

//necesario para node module.exports
const module = require('./exportarfunciones');
module.sumar(3,4)

