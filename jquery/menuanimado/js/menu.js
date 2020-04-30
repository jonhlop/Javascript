var botones = $('.menu li a ');

botones.on('mouseover', activarMarcador);

function activarMarcador(event) {
    event.preventDefault();

    var ancho = $(this).css('width');
    var posicion = $(this).offset().left;
    var url = $(this).attr('href');



    $('#marcador').stop().animate({
        'width': ancho,
        'left': posicion
    }, 500, function () {
        window.location = url;

    })


}