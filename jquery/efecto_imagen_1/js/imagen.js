var container = $('.contenedor');

//container.on('mouseover', entrar);
//container.on('mouseout', salir);

container.hover(entrar, salir) //para hacer eventos contrarios


function entrar() {
    $(this).find('.info').stop().animate({
        'left': '0px'
    })

}

function salir() {
    $(this).find('.info').stop().animate({
        'left': '-400px'
    })
}