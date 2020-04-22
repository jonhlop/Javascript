const contactos = new Array({
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
}, {
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
}, {
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
}, {
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
}, {
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
}, {
    nombre: "Juan Pedro",
    imagen: "https://thispersondoesnotexist.com/image",
    telefono: 912345634,
})

//capturo los elementos que voy a utilizar una buena politica es capturarlos globalmente

var seccion = document.getElementById('contactos');

function pintarAgenda(pListaContactos) {

    for (contacto of pListaContactos) {

        seccion.innerHTML += ` <article>
        <h3>${contacto.nombre}</h3>
        <div>
            <img src="${contacto.imagen}"
                alt="">
        </div>
        <p><strong>${contacto.telefono}</strong></p>
    </article>`


    }
    console.log(contador);

}

pintarAgenda(contactos);

var articulos = document.querySelectorAll('#contactos article')
var contador = 0;
for (articulo of articulos) {

    if (contador % 2 == 0) {
        articulo.style.borderColor = 'red';
    } else {
        articulo.style.borderColor = 'blue';
    }
    contador++;
}