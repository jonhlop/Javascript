const primeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa uno')
    }, 1500)
})

const segundaPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Promesa fallida')
        resolve('Promesa dos')
    }, 1000)
})
const terceraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa tres')
    }, 2500)
})

//promiseall lo que ahce es ejecutar todas las promesas al mismo tiempo pero  tarda lo que tarde la mas lenta, todo el conjunto tarda la que mas tarda
//si falla una 
Promise.all([primeraPromesa, segundaPromesa, terceraPromesa])
    .then(arrPtomises => {
        //console.log('Promiseall',mensaje)
        arrPtomises.forEach(promise => {
            console.log(promise)
        })
    })
    .catch(err => {
        console.log(err)
    })