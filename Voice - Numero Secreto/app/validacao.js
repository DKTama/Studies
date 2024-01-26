function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        if (chute.toUpperCase()==="GAME OVER"){
            document.body.innerHTML = `
                <h2>GAME OVER!!!</h2>
                <h3>Pressione o botão abaixo para jogar novamente</h3>
                <button id="jogarNovamente" class="btnJogar">Jogar Novamente</button>
                `
                document.body.style.backgroundColor = 'black'
                document.body.style.color = 'red'

        }else{
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
        }
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <br>
        <button id="jogarNovamente" class="btnJogar">Jogar Novamente</button>
        `
    } else if(numero>numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `
    }else{
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e=> {
    if (e.target.id=='jogarNovamente'){
        window.location.reload();
    }
})