<<<<<<< HEAD
function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco -(livro.preco * desconto)}
    })

    return livrosComDesconto
=======
function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco -(livro.preco * desconto)}
    })

    return livrosComDesconto
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
}