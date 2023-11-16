var listaNomeAnimes = [];
var listaAnimes = [];
var listaTrailerAnimes = [];

function adicionarAnime(){
    var nomeAnime = document.getElementById('nome').value;
    var animeFavorito = document.getElementById('anime').value;
    var trailerAnimeFavorito = document.getElementById('trailer').value;

    if((animeFavorito.endsWith('jpg')) || (animeFavorito.endsWith('jpeg')) ||  (animeFavorito.endsWith('png'))){
        document.getElementById('mensagemDeErro').innerHTML = '';
        listaNomeAnimes.push(nomeAnime);
        listaAnimes.push(animeFavorito);
        listaTrailerAnimes.push(trailerAnimeFavorito);
        
        limpaCampos();
        recarregarAnimes();

    } else {

    document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido. Os formatos de imagem aceitos são: jpg, jpeg, png. Por favor, tente novamente';
    limpaCampos();
    }
}

function recarregarAnimes(){
 
    var elementoListaAnimes = document.getElementById('listaAnimes');
    elementoListaAnimes.innerHTML = '';
    for(i=0; i < listaAnimes.length ; i++){
        elementoListaAnimes.innerHTML += `<a href=" ${listaTrailerAnimes[i]},"_blank" rel="noopener noreferrer""><img src=" ${listaAnimes[i]} "></a>`;
        elementoListaAnimes.innerHTML += `<p> ${i}. ${listaNomeAnimes[i]}  </p><br>`;

      
    }
}
  
function limpaCampos(){
    document.getElementById('nome').value = '';
    document.getElementById('anime').value = '';
    document.getElementById('trailer').value = '';
    document.getElementById('remover').value = '';
}

//desafio - remover animes
function removerAnime(){
     
    
   delete listaAnimes[document.getElementById('remover').value];
   delete listaTrailerAnimes[document.getElementById('remover').value];
   delete listaNomeAnimes[document.getElementById('remover').value];

   listaAnimes = listaAnimes.filter(function(){return true});
   listaTrailerAnimes = listaTrailerAnimes.filter(function(){return true});
   listaNomeAnimes = listaNomeAnimes.filter(function(){return true});


    limpaCampos();
    recarregarAnimes();
}
