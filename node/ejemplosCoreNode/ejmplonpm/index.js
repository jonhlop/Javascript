const chalk = require("chalk");
const axios = require("axios");
const tokengn = require("tokengn");
const operaciones = require('./lib/operaciones')
const mensajes = require('./lib/mensajes')

console.log(operaciones.sum(3, 9))



console.log(tokengn());

axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
    console.log(response.data);
});

console.log(__dirname);
console.log(__filename)