const express = require("express");

require("dotenv").config();
//Creo la aplicacion de express
const app = express();

//GESTION DE RUTAS
//http://localhost:300
app.get("/", (req, res) => {
  res.end("Accede a la ruta raiz");
});

//Get localhost/4200/contacto
app.get('/contacto', (req,res)=>{
    res.end('Accedor a la ruta contacto')
})

//POST /CLIENTES/CREATE
app.post('/clientes/create', (req,res)=>{
    res.json({success: 'Se ha creado el cliente'})
})
//pongo la aplicacion a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server escuchando en el puerto 3000!");
});
