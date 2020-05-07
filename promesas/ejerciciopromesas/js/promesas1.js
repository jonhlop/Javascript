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

getUsuarios(2)
    .then(usuarios => imprimirUsuarios(usuarios))
    .catch(err => console.log(err))


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