const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;
        if (descuento) {
            resolve('Descuento ha sido aplicado')
        } else {
            reject('No se puede aplicar descuento')
        }
    }, 3000)

})

aplicarDescuento 
.then(resultado=>{
    console.log(resultado)
})
.catch(err=>{
    console.log(err)
})