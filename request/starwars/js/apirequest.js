function getSwapi(pUrlApi, pId = "") {
    let url = 'https://swapi.dev/api/' + pUrlApi + "/" + pId; //esto coge la url ya que es comun, solo cambia el ID
    let peticion = new XMLHttpRequest();
    peticion.open('GET', url, true); //abrimos la peticion true porque es asincrona
    peticion.send();

    peticion.addEventListener('load', (event) => {
        let texto = event.target.responseText;
        let objetoSwapi = JSON.parse(texto);
        if (objetoSwapi.hasOwnProperty('results')) {
            //pintar una lista de elementos en eventos .js

            const lista = objetoSwapi.results;
            printList(lista)

        } else {
            //pinto un objeto en eventos.js
            printObject(objetoSwapi)
        }
    });


}

getSwapi('people');

'https://swapi.dev/api/people/'
'https://swapi.dev/api/people/1'
'https://swapi.dev/api/films/'
'https://swapi.dev/api/films1/'