var url = "https://jsonplaceholder.typicode.com/posts";
var seccionBlog = document.querySelector('#blog')

var pedido = new XMLHttpRequest();
//ABRIR UN CANAL DE COMUNICACIÓN
pedido.open('GET', url, true);

//HACER LA PETICION DEL PEDIDO
pedido.send();

//ESTAR ATENTO A  TODOS LOS ESTADOS DE MI PEDIDO;
pedido.addEventListener('readystatechange', cargarArchivo);


function cargarArchivo(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        //solo aqui tengo disponible la informacion
        let texto = event.target.responseText;

        const listaPost = JSON.parse(texto) // convierte un texto en json array
        pintarPost(listaPost)

    }
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