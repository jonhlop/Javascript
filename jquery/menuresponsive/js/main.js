var btnHamburguesa = $('.hamburguesa');

btnHamburguesa.on('click', slideMenu);

function slideMenu() {
    $('nav ul').slideToggle(400)
}