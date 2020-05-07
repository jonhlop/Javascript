function aleatorio() {


    let prom = new Promise((resolve, reject) => {
        let randomNum = Math.random();
        if (randomNum > 0.5) {
            resolve('La promesa se resuelve')
        } else {
            reject('El numero es menos que 0.5')
        }

    })

    return prom
}


//existe un tipo de funcion que se llama autoejecutada
(async () => {
    try {
        const msg = await aleatorio()
        console.log(msg)
    } catch (err) {
        console.log(err)
    }

})()