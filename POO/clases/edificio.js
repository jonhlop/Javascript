class Persona {
    constructor(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    mostrar() {
        return `Nombre: ${this.nombre}. Apellidos: ${this.apellido}. Edad: ${this.edad}`;
    }
}


class Vivienda {
    constructor(pPiso, pLetra) {
        this.piso = pPiso;
        this.letra = pLetra;
        this.habitantes = new Array();
    }

    agregarHabitante(...pPersona) {
        this.habitantes.push(...pPersona);
    }

    mostrar() {
        let resultado = `Piso: ${this.piso}. Letra: ${this.letra}`;
        for (let habitante of this.habitantes) {
            resultado += '\n' + habitante.mostrar()
        }


        return resultado;
    }
}



class Edificio {
    constructor(pCalle, pNumero, pAnio = "2020") {
        this.anioConstruccion = pAnio;
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = new Array();
    }

    agregarCasa(...pCasa) {
        this.casas.push(...pCasa);
    }

    static mostrarAnioConstruccion(pEdificio) {
        return pEdificio.anioConstruccion;
    }

    static mostrarMetrosCuadrados() {
        return "600 metros";
    }

    mostrar() {
        let resultado = `Calle: ${this.calle}. Numero: ${this.numero}.`;
        for (let casa of this.casas) {
            resultado += '\n' + casa.mostrar();
        }

        return resultado;
    }
}

const pers1 = new Persona('Rodrigo', 'Garcia', 40);
const pers2 = new Persona('Gema', 'Pujalde', 36);

const viv1 = new Vivienda(1, 'B');
viv1.agregarHabitante(pers1, pers2);

const viv2 = new Vivienda(2, 'A');

const edif1 = new Edificio('Plaza de España', 14);
const edif2 = new Edificio('Granvia', 69, '1968');
// console.log(edif1.calle);
// console.log(Edificio.mostrarAnioConstruccion(edif1))
// console.log(Edificio.mostrarMetrosCuadrados());




edif2.agregarCasa(viv1, viv2);

console.log(edif2.mostrar());


//ejemplo de funciones static
// const aleatorio = Math.random();
// const redondeoAlza = Math.ceil(4.5);

// console.log(aleatorio);
// console.log(redondeoAlza);