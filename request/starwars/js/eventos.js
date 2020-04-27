var personajesUl = document.querySelector('#personajes')
var vistaPersonaje = document.querySelector('#vistaPersonaje');


function printList(pLista) {
    for (item of pLista) {
        let li = document.createElement('li');
        let textoli = document.createTextNode(item.name);
        //Existe una funcion que permite partir strings. split
        let url = item.url;
        let elementosurl = url.split('/');
        li.dataset.personaje = elementosurl[4] //añadimos un dataset a los li
        li.dataset.id = elementosurl[5]

        li.appendChild(textoli);
        personajesUl.appendChild(li);

        li.addEventListener('click', recogemosInfo);
    }

}

function printObject(pObject) {
    vistaPersonaje.innerHTML = `<h2>${pObject.name}</h2>
                                <ul>
                                    <li>Altura: ${pObject.height}</li>
                                    <li>Peso: ${pObject.mass}</li>
                                    <li>Color de piel: ${pObject.skin_color}</li>
                                    <li>Color de pelo: ${pObject.hair_color}</li>
                                    <li>Genero: ${pObject.gender}</li>
                                    <li>Año de nacimiento: ${pObject.birth_year}</li>

                                </ul>
                                <h2>Peliculas en las que aparece</h2>
                                <div class="peliculas">
                                `
    let films = pObject.films;
    for (film of films) {
        vistaPersonaje.innerHTML += `
                                            <article>
                                            <h3>${film}</h3>
                                            <ul>
                                                <li>Capitulo: </li>
                                                <li>Director: </li>
                                                <li>Año: </li>
                                            </ul>
                                        </article>`

    }
    vistaPersonaje.innerHTML += `</div>`
}

function recogemosInfo(event) {
    let tipo = event.target.dataset.personaje;
    let id = event.target.dataset.id;
    getSwapi(tipo, id)


}