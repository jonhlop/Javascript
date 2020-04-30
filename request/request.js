var url = "https://jsonplaceholder.typicode.com/posts";
var seccionBlog = document.querySelector('#blog')

var pedido = new XMLHttpRequest();
//ABRIR UN CANAL DE COMUNICACIÓN
pedido.open('GET', url, true);// assincrono que no voy a esperar a que cargue este archivo para que cargue todo lo demas

//HACER LA PETICION DEL PEDIDO
pedido.send();

//ESTAR ATENTO A  TODOS LOS ESTADOS DE MI PEDIDO;
pedido.addEventListener('load', cargarArchivo);


function cargarArchivo(event) {
    var texto = event.target.responseText;
    const ListaPost = JSON.parse(texto);
    pintarPost(ListaPost);
}

function pintarPost(pListaPost) {
    for (post of pListaPost) {
        let article = document.createElement('article')
        let h2 = document.createElement('h2')
        article.dataset.id = post.id;
        let p = document.createElement('p')

        let titulo = document.createTextNode(post.title)
        let contenido = document.createTextNode(post.body)

        p.appendChild(contenido);
        h2.appendChild(titulo);

        article.appendChild(h2);
        article.appendChild(p)
        seccionBlog.appendChild(article)
    }
}