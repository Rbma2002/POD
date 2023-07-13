document.getElementById('menu').addEventListener('click',function(){

document.getElementById('navega').classList.toggle('mostrar');



})

// resuelve la problematica y vuelve a la foto 1
// hay que borrarle el script x default xq ya esta en html
lightbox.option({
    'wrapAround': true,
    'albumLabel':"Imagen %1 de %2",
    'positionFromTop': 20,
    'disableScrolling':true,


  })

  document.getElementById('boton').addEventListener('click',function(){

    if(document.getElementById('miVideo').paused)
    document.getElementById('miVideo').play();

    else 


          document.getElementById('miVideo').pause();
        
        
  })


