var botones = $('nav ul a');

botones.on('click', irSeccion);
$('#subir').on('click', irSeccion)

function irSeccion() {

    let href = $(this.hash);
    let velocidad = $(this).data('velocidad')
    let distancia = href.offset().top;

    $('html, body').animate({
        'scrollTop': distancia
    }, 2000 / velocidad)



}

$(window).scroll(parallax)

function parallax() {
    let distanciaScroll = $(window).scrollTop();


    $('body').css('background-position', 'center ' + (-1 * 0.10 * distanciaScroll) + 'px')


}