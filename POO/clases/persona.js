class Persona {

    constructor(pNombre, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
    }

    hablar() {
        return `Me llamo ${this.nombre} y tengo ${this.edad} años`;
    }

    cambiarEdad(pNuevaEdad) {
        this.edad = pNuevaEdad;
    }
}

let persona = new Persona('Juan', 38);
// console.log(persona.nombre);
// console.log(persona.edad);
persona.cambiarEdad(40);
console.log(persona.hablar())