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

/* 
aleatorio()
.then(msg=>{
    console.log(msg)
})
.catch(err=>{
    console.log(err)
})
.finally(()=>{
    console.log('Paso por el finally')
}) */


//async await
async function main() {
    try {
        const msg = await aleatorio()
        console.log(msg)
    } catch (err) {
        console.log(err)
    }
}

main();