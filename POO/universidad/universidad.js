class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    agregarAlumno(...estudiante) {
        this.alumno.push(...estudiante)
    }
    obtenerAlumnosAsignatura(pNombreAsignatura) {
        let count = 0;
        for (let alumno of this.alumno){
            for(let asignatura of alumno){
                if(asignatura.nombre == pNombreAsignatura){
                    count++;
                }
            }
        }
    }


    mostrarUniversidad() {
        console.log(`UNIVERSIDAD(nombre: ${this.nombre})`)


    }
}
module.exports = Universidad //para exportar en node