//quien lanza los eventos captura botones

var botones = document.querySelectorAll('#menu a');

for (boton of botones) {
    boton.addEventListener('click', capturarBoton);

}

function capturarBoton(event) {
    event.preventDefault();
    //   console.log(event)
    let seccion = event.target.innerText.toLowerCase();
    console.log(seccion);
    let secciones = document.querySelectorAll('.contenedor section');
    secciones.forEach(seccion => seccion.style.display = "none");
    document.getElementById(seccion).style.display = "block";

}