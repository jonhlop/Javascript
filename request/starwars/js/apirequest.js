function getSwapi(pUrlApi, pId = "", pPage = "") {
    let url = "https://swapi.dev/api/";

    url += (pPage == "") ? pUrlApi + "/" + pId : pUrlApi + "/?page=" + pPage;

    let peticion = new XMLHttpRequest();
    peticion.open('GET', url, true);
    peticion.send();

    peticion.addEventListener('load', (event) => {
        let texto = event.target.responseText;
        let objetoSwapi = JSON.parse(texto);
        if (objetoSwapi.hasOwnProperty('results')) {
            //pinto lista de elementos en eventos.js


            let next = (objetoSwapi.next != null) ? objetoSwapi.next.split('=')[1] : "";


            let prev = (objetoSwapi.previous != null) ? objetoSwapi.previous.split('=')[1] : "";

            const lista = objetoSwapi.results;


            printList(lista, next, prev);
        } else if (pUrlApi == "films") {
            //pinto una pelicula
            printObjectFilm(objetoSwapi);
        } else {
            //pinto un objeto en eventos.js
            printObject(objetoSwapi);
        }
    });

}

getSwapi('people');

// 'https://swapi.dev/api/people' //lista de people
// 'https://swapi.dev/api/people/1/' //un unico people
// 'https://swapi.dev/api/films/' //lista de films
// 'https://swapi.dev/api/films/1/' //unico film