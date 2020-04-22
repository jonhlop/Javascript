var noticias = document.getElementById('noticias');
const noticiasArray = new Array();

function pintarNoticias(pTitulo, pNoticia) {
    //creo article
    let article = document.createElement('article');
    article.style.width = "200px";

    //creo el contenido de article
    let h3 = document.createElement('h3');
    let tituloNoticia = document.createTextNode(pTitulo);
    h3.appendChild(tituloNoticia);
    h3.style.backgroundColor = "tomato";
    h3.style.padding = "10px";
    h3.style.fontWeight = "bold";
    article.id = pTitulo.toLowerCase();


    let p = document.createElement('p');
    let noticia = document.createTextNode(pNoticia);

    p.appendChild(noticia);
    p.style.textAlign = 'center'
    article.appendChild(h3);
    article.appendChild(p);
    noticias.appendChild(article);


    noticiasArray.push({
        noticia: pTitulo,
        texto: pNoticia,
    })
    console.log(noticiasArray);

}

/*  Funcion borrarNoticia que borre la noticia tanto del HTML como del ARRAy  */

function borrarNoticia(pId) {
    //borramos del array la noticia
    var noticiaBuscar = pId;
    var posicionBuscada = noticiasArray.findIndex(nombre => nombre.noticia == noticiaBuscar)


    noticiasArray.splice(posicionBuscada, 1);


    //Borramos la noticia del html
    let noticiaBorrar = document.getElementById(pId.toLowerCase());
    noticiaBorrar.parentNode.removeChild(noticiaBorrar);

    console.log(noticiasArray);

}