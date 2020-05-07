//la calculadora tendra que poder sumar y multiplicar cualquier cantidad de numeros y sacar el resultado por pantalla.

class Calculadora {

    sumar() {
        let resultado = 0;
        for (let numero of arguments) {
            resultado += numero;
        }
        return resultado;
    }

    //rest parameter, para lo que vamos a utilizar spread operator

    multiplicar(pTexto, ...numeros) {
        let arrayNumeros = new Array(...numeros);
        let resultado = 1;
        for (let numero of arrayNumeros) {
            resultado *= numero;
        }
        return pTexto + resultado;
    }


}

let calculadora = new Calculadora();

console.log(calculadora.sumar(1, 2, 3, 4, 5)); //15
console.log(calculadora.multiplicar('La multiplicacion es ', 2, 2, 2, 2, 2, 2, 2)) //128;
