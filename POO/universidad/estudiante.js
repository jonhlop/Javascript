class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignatura = new Array();
    }
    agregarAsignatura(pAsignatura) {

        this.asignatura.push(pAsignatura)

    }
    mostrarEstudiante() {
        console.log(`ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})`)
        console.log('Estas son las asignaturas que cursa:')
        for (let asignatura of this.asignatura) {
            asignatura.mostrarAsignatura(true)
        }
    }
}
module.exports = Estudiante