//Definindo número aleatório
let random = Math.floor(Math.random() * (10 - 0 + 1) + 0);

alert ("Vamos jogar um jogo, a máquina escolheu um número aleatório entre 0 e 10. Você terá algumas chances de acertá-lo.");

let chute = prompt(`Este é seu chute número 1. Qual número deseja tentar?`);


//Talvez de para diminuir número de linhas, tentarei retornar para este exercício futuramente
if (chute == random){
 alert (`Parabéns, o número era de fato ${chute}`);
} else {
    for (n=0; n<2; n++){
        if (chute != random){
        chute = prompt(`Tranquilo, o número não era ${chute}. Você possui mais ${2-n} tentativas. Chute outro número.`);
        }else{
            alert (`Parabéns, o número era de fato ${chute}`);
        }
    }
}

if  (chute != random){
    alert (`Que pena, o número aleatório era ${random}.`);
}