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

//race nos permite obtener la primera promesa que sea resuelta en primer lugar
// si hay una erronea pero es mas lenta que la primera que llega no pasa nada
//si la que falla es la primera en llegar se para 
Promise.race([primeraPromesa, segundaPromesa, terceraPromesa])
    .then(valores => {
        console.log(`Promesa conjunta resuelta: ${valores}`)
    })
    .catch(err => {
        console.log(`Promesa conjunta rechaza: ${err}`)
    })