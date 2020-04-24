const listaAficiones = new Array();

//boton
var boton = document.querySelector('#btn');

//Pintamos la informacion en HTML
var secionAficiones = document.querySelector('#listaAficiones');

boton.addEventListener('click', (event) => {
    //bloquear la accion por defecto
    event.preventDefault();
    mensaje.innerText = "";
    //capturar los datos que me pasan del formulario
    let nombre = document.querySelector('#nombre').value;
    let aficion = document.querySelector('#aficion').value;
    if (nombre != "" && aficion != "") {
        guardarDatos(nombre, aficion);
        document.querySelector('#nombre').value = "";
        document.querySelector('#aficion').value = "";
    } else {
        mensaje.innerText = "Debes introducir los dos campos";
    }




})

function guardarDatos(pNombre, pAficion) {
    /* let registro = {
        nombre = pNombre,
        aficion = pAficion,
    }
    */
    let registro = new Object();
    registro.nombre = pNombre;
    registro.aficion = pAficion;

    //lo metemos en el array
    listaAficiones.push(registro);
    //    console.log(listaAficiones)
    pintarRegistro(registro);
}

function pintarRegistro(pObjeto) {
    secionAficiones.innerHTML += `  <article>
            <h3>${pObjeto.nombre} :${pObjeto.aficion}</h3>
            </article> `
}

//deberia controlar que no haya campos vacios 
// si la aficion y el nombre ya existen juntos, me salte un mensaje que dice que el usuario ya existe