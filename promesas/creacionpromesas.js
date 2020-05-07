let prom = new Promise((resolve, reject) => {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve('La promesa se resuelve')
    } else {
        reject('El numero es menos que 0.5')
    }

})
//el then resuelve la parta positiva de la promesa y el catch resuelve la parte negativa
prom
    .then((pMsg) => {
        console.log(pMsg)
    })
    .catch((err) => {
        console.log(err)
    })