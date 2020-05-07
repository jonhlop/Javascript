// Voy hacer una consulta a una api externa
const contenedor = document.querySelector('#team')

function getUsuarios(pCantidad) {
    const descargarUsuarios = new Promise((resolve, reject) => {
        const url = 'https://randomuser.me/api/?results=' + pCantidad;
        let peticion = new XMLHttpRequest();
        peticion.open('GET', url, true);

        peticion.send()
        peticion.addEventListener('load', (event) => {
            if (event.target.status == 200) {
                resolve(JSON.parse(peticion.responseText).results)
                //resolve();

            } else {
                reject(error(peticion.statusText))
            }
        })
    })
    return descargarUsuarios
}

async function cargarUsuarios(pCantidad) {
    try {
        let usuarios = await getUsuarios(pCantidad)
        imprimirUsuarios(usuarios)
    } catch (err) {
        console.log(err)
    }

}
cargarUsuarios(5);


function imprimirUsuarios(pListaUsuarios) {
    let htmlusuario = ""
    pListaUsuarios.forEach(usuario => {
        htmlusuario += `<article>
                                <div>
                                    <img src="${usuario.picture.medium}" alt="">
                                </div>
                                <div>
                                    <h3>${usuario.name.first} ${usuario.name.last}</h3>
                                    <p><a href="${usuario.email}">${usuario.email}</a></p>
                                </div>
                            </article>`
    })
    contenedor.innerHTML = htmlusuario

}