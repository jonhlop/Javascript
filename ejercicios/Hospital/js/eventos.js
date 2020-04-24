//capturo Los datos del HTMl que necesito 

var seccionPacientes = document.querySelector('#pacientes')
var campoNumeroPacientes = document.querySelector('#numeropaciones')

function pintarPacientes(pListaPacientes) {
    seccionPacientes.innerHTML = "";
    //la longitud de la lista es la cantidad de pacientes que hay
    campoNumeroPacientes.innerText = pListaPacientes.length;
    pListaPacientes.forEach(paciente => {

        seccionPacientes.innerHTML += `<article>
                                    <h3>${paciente.nombre} ${paciente.apellido}</h3>
                                    <ul>
                                        <li>EDAD:${paciente.edad}</li>
                                        <li>NUMERO SEGURIDAD SOCIAL : ${paciente.numeroSS}</li>
                                    </ul>
                                    <div class="diagnostico">
                                        ${paciente.diagnostico}
                                    </div>
                                </article>`

    })
}


/* pintarPacientes(pacientes); */

//EVENTOS

var botonFiltroEdad = document.getElementById('botonEdad');
botonFiltroEdad.addEventListener('click', capturarDatosEdades);



function capturarDatosEdades(event) {
    event.preventDefault();

    let edadMin = document.querySelector('#edadMin').value;
    let edadMax = document.querySelector('#edadMaxima').value;

    /*     console.log(edadMin, edadMax) */
    if (edadMin != "" && edadMax != "") {
        pintarPacientes(filtrarXedad(pacientes, edadMin, edadMax));

    } else {
        pintarPacientes(pacientes);
    }

}

//filtro de diagnostico
//captura el lanzador del evento que en este caso es propio select evento change
var selectDiagnostico = document.querySelector('#diagnostico');
selectDiagnostico.addEventListener('change', capturarDiagnostico);

function capturarDiagnostico(event) {
    let tipoDiagnostico = event.target.value;
    //console.log(tipoDiagnostico)

    if (tipoDiagnostico != "") {
        pintarPacientes(filtrarXdiagnostico(pacientes, tipoDiagnostico));
    } else {
        pintarPacientes(pacientes);
    }


}

//superfiltro recogera valores de edad y diagnostico y me filtrara usando los 3 valores encadenados

var btnsuperFiltro = document.getElementById('superboton')
btnsuperFiltro.addEventListener('click', cargarDatosSuperfiltro);

function cargarDatosSuperfiltro(event) {
    event.preventDefault();
    let edadMin = document.querySelector('#edadMin2').value;
    let edadMax = document.querySelector('#edadMaxima2').value;
    let diagnostico = document.querySelector('#diagnostico2').value;

    pintarPacientes(filtrarXdiagnostico(filtrarXedad(pacientes, edadMin, edadMax), diagnostico));

}

//quiero buscar un paciente por su nombre, el objetico del buscador es si yo pongo Ju- me tiene que encontrar Juan Juanjo, ria=> maria