const sumar = (pNumeroA, pNumeroB) => console.log(pNumeroA + pNumeroB);

const restar = (pNumeroA, pNumeroB) => console.log(pNumeroA - pNumeroB);


let literal = "Hola desde un modulo";

//necesario para node module.exports
module.exports = { sumar, restar, literal };