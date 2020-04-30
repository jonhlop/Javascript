var container = $('.contenedor');



container.hover(entrar, salir) //para hacer eventos contrarios


function entrar() {
    $(this).find('.info').stop().animate({
        'top': '300px'
    }, 1000);
    $(this).find('.imagen').addClass('rotateScale');
}

function salir() {
    $(this).find('.info').stop().animate({
        'top': '400px'
    }, 1000)
    $(this).find('.imagen').removeClass('rotateScale')
}