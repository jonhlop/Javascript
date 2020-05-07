export default class Tarea {

    constructor(pTitulo, pPrioridad) {
        this.titulo = pTitulo
        this.prioridad = pPrioridad
    }

    mostrarTarea() {
        let p = document.createElement('p')
        let texto = document.createTextNode(this.titulo)
        p.appendChild(texto)
        p.className = this.prioridad
        document.body.appendChild(p);
    }
    copletarTarea() {
        this.estado = "completado"
    }
    actualizarTarea(pTitulo, pPrioridad) {
        this.titulo = pTitulo
        this.prioridad = pPrioridad
    }
}