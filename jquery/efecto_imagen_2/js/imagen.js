 var container = $('.contenedor');



 container.hover(entrar, salir) //para hacer eventos contrarios


 function entrar() {
     $(this).find('.info').stop().fadeIn(1000)

 }

 function salir() {
     $(this).find('.info').stop().fadeOut(1000)
 }