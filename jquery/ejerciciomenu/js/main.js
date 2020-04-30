var btn = $('.boton');

btn.on('click', ventanaSalir);
var estado = "fuera"

function ventanaSalir() {
    if (estado == "fuera") {
        $('#menu').animate({
            'right': '0px'
        })
        estado = "dentro"

    } else {
        $('#menu').animate({
            'right': '-200px'
        })
        estado = "fuera"
    }

}

