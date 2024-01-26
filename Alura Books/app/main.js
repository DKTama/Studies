<<<<<<< HEAD
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI ();

async function getBuscarLivrosDaAPI (){
    const res = await fetch (endpointDaAPI)
    livros = await res.json()

    let livrosComDesconto = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosComDesconto);
=======
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI ();

async function getBuscarLivrosDaAPI (){
    const res = await fetch (endpointDaAPI)
    livros = await res.json()

    let livrosComDesconto = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosComDesconto);
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
}