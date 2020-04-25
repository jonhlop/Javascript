//mover coche rojo
//eventos de teclado 
//capturar coche rojo
var ferrari = document.querySelector('#coche1');
var lambo = document.querySelector('#coche2');
var maserati = document.querySelector('#coche3');
var avanceFerrari = 0;
var avanceLambo = 0;
var avanceMaserati = 0;
var nitro = 3;
var mensaje = document.querySelector('#mensaje');

document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {
    var tecla = event.keyCode;

    switch (tecla) {
        case 32:
            //mover coche
            moverFerrari(10);
            break;
        case 78:
            //nitro
            if (nitro > 0) {
                moverFerrari(30);
                nitro--;
            } else {
                moverFerrari(10);
            }

            break

    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px';

    if (avanceFerrari >= 670) {
        mensaje.innerText = "Ha gando Ferrari";
        document.removeEventListener('keydown', capturarTeclas);
        pararJuego();
    }
}

var int2 = setInterval(moverCoche2, 100);



function moverCoche2() {
    avanceLambo += 20;
    lambo.style.marginLeft = avanceLambo + 'px';

    if (avanceLambo >= 670) {
        pararJuego();
        mensaje.innerText = "Ha gando Lambo";
    }
}

var int3 = setInterval(moverCoche3, 100);

function moverCoche3() {
    avanceMaserati += Math.random() * 40;
    maserati.style.marginLeft = avanceMaserati + 'px';

    if (avanceMaserati >= 670) {
        pararJuego();
        mensaje.innerText = "Ha gando Maserati";
    }
}

function pararJuego() {
    clearInterval(int2);
    clearInterval(int3);
    document.removeEventListener('keydown', capturarTeclas);
}