//clase coche que tiene como atributos marca, modelo, color, velocidadActual

//quiero poder acelerar y frenar con el coche.

class Coche {
    constructor(pMarca, pModelo, pColor) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        this.velocidad = 0;
    }

    acelerar(pCambioVelocidad) {
        this.velocidad += pCambioVelocidad;
    }

    frenar(pCambioVelocidad) {
        if (pCambioVelocidad <= this.velocidad) {
            this.velocidad -= pCambioVelocidad;
        }
    }

    estadoVehiculo() {
        return `
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Color: ${this.color}
            Velocidad: ${this.velocidad}
        `
    }
}

const coche1 = new Coche('Seat', 'Ibiza', 'Rojo');
const coche2 = new Coche('Fiat', 'Topolino', 'Burdeos');

coche1.acelerar(40);
coche1.frenar(20);
// console.log(coche1.estadoVehiculo());
// console.log(coche2.estadoVehiculo());
coche2.frenar(20);
// console.log(coche2.estadoVehiculo());


const coches = new Array(coche1, coche2);

coches.forEach(coche => console.log(coche.estadoVehiculo()))