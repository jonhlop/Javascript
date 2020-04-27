var botones = document.querySelectorAll('.botonera button');
var display = document.querySelector('#display');
var numero;
var resultado = 0;
var operacion = "";

botones.forEach(boton => {
    boton.addEventListener('click', calcular);
})

function calcular(e) {
    //debeis pulsar en cualquier boton, pero en el display solo se tienen que ver numeros
    if (event.target.id == "") {
        //estoy tocando vacio

        numero = event.target.innerText;
        display.value += numero;

    } else if (e.target.id == "suma" || e.target.id == "resta") {
        //tocando operacion o otro boton teneis que vaciar el display y  permitir meter otro numero sin perder el que habeis metido
        operacion = event.target.id
        switch (e.target.id) {
            case "suma":
                resultado += parseInt(display.value)
                break;
            case "resta":
                resultado = (resultado == 0) ? resultado + parseInt(display.value) : resultado - parseInt(display.value);
                break;
        }

        display.value = "";
    } else if (e.target.id == "igual") {

        switch (operacion) {
            case "suma":
                resultado += parseInt(display.value)
                break;
            case "resta":
                resultado -= parseInt(display.value)
                break;

        }
        display.value = resultado;
    } else if (e.target.id == "reset") {
        operacion = "";
        resultado = 0;
        display.value = "";
    }
}