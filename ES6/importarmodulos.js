//importar dentro de html
//import { sumar, literal } from './exportarfunciones.js';

//require desde node, no valido para usar dentro de html, sin la extension js
const funciones = require('./exportarfunciones2');

funciones.sumar(3, 4);

console.log(funciones.literal);
