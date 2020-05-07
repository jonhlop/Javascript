var faq = $('.faq h2')

faq.on('click', function () {

    //opcion 1
    //$(this).next().slideToggle(400);

    //opcion 2
    $('.faq h2').removeClass('titulo')
    $('.faq p').slideUp(400)
    $('.faq h2').css('background-color', 'lightblue')
    let contenido = $(this).next()


    if (contenido.css('display') == 'none') {
        //desplegar
        contenido.slideDown(400);
        $(this).css('background-color', 'tomato')
        $(this).addClass('titulo')
    } else {
        //replegar
        contenido.slideUp(400);

    }

})