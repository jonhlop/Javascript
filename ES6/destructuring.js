//destructuring objetos o com extraer valores de un objeto

//version antigua

const aprendiendoJs = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'Angular', 'Vuejs']
}

let versionNueva = aprendiendoJs.version.nueva; // "ES6"
let angular = aprendiendoJs.frameworks[1]; //angular

//destructuring - nueva

let { version, frameworks } = aprendiendoJs;
console.log(version);
console.log(frameworks);

let { nueva } = aprendiendoJs.version;

console.log(nueva);