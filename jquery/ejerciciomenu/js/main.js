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


var boton = $('.boton');
boton.on('click', desplegarMenu);
var menu = $('#menu');

function desplegarMenu() {
    let posicion = (menu.css('right') == '0px') ? '-200px' : '0px';
    menu.animate({
        'right': posicion
    }, 1000);
}