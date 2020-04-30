var botones = $('#menu a');
var contenedor = $('#contenedor');

botones.on('click', cargarSecciones);

function cargarSecciones(event) {
    event.preventDefault();

    let documento = $(this).data('documento');

    contenedor.load(documento + '.html');
} 