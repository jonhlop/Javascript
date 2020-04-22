//filtreis los pacientes por rango de edad, es decir por una edad maxima y minima, puede filtrar por dentro y fuera del ranto.

function filtrarXedad(pLista, pEdadMinima, pEdadMaxima, pTipoRango = "dentro") {
    let listaFiltrada = new Array();

    if (pTipoRango != "fuera") {
        //opcion function anonima
        listaFiltrada = pLista.filter(function (paciente) {
            return paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima;
        })
    } else {
        //opcion funcion arrow
        listaFiltrada = pLista.filter(paciente => (paciente.edad >= 0 && paciente.edad < pEdadMinima) || (paciente.edad > pEdadMaxima && paciente.edad <= 100))
    }


    return listaFiltrada;
}

// var temporal = filtrarXedad(pacientes, 20, 70);
// console.log(temporal);


//filtres por enfermedad.

function filtrarXdiagnostico(pLista, pDiagnostico) {
    let listaFiltrada = new Array();

    for (paciente of pLista) {
        if (paciente.diagnostico.toLowerCase() == pDiagnostico.toLowerCase()) {
            listaFiltrada.push(paciente);
        }
    }

    return listaFiltrada;
}

// var temporal = filtrarXdiagnostico(pacientes, 'Calvicie');
// console.log(temporal);

//vamos a combinar los dos filtros para obtener pacientes entre un rango de edad y enfermedad concreta

var temporal = filtrarXdiagnostico(filtrarXedad(pacientes, 20, 40), 'Diabetes')
console.log(temporal);


//quiero saber aquellos pacientes cuyo numero de la seguridad acabe en cero.


function filtrarXNumeroSS(pLista, pNumero) {

    let listaFiltrada = new Array();

    listaFiltrada = pLista.filter(paciente => {
        let numeroSS = paciente.numeroSS;
        let ultimoDigito = parseInt(numeroSS[numeroSS.length - 1]);
        return ultimoDigito == pNumero;
        // return parseInt(paciente.numeroSS[paciente.numeroSS.length - 1]) == pNumero;
    })

    return listaFiltrada;
}

var temporal2 = filtrarXNumeroSS(pacientes, 0);
console.log(temporal2);

