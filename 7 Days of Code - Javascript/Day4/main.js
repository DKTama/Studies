<<<<<<< HEAD
//Definindo número aleatório
const  random = Math.floor(Math.random() * (10 - 0 + 1) + 0);

alert ("Vamos jogar um jogo, a máquina escolheu um número aleatório entre 0 e 10. Você terá algumas chances de acertá-lo.");

let chute = 11;

for (n=0; n<3; n++){
    if (chute != random){
    chute = prompt(`Você possui ${3-n} tentativas. Chute um número.`);
    }else{
        alert (`Parabéns, o número era de fato ${chute}`);
    }
}

if  (chute != random){
    alert (`Que pena, o número aleatório era ${random}.`);
=======
//Definindo número aleatório
const  random = Math.floor(Math.random() * (10 - 0 + 1) + 0);

alert ("Vamos jogar um jogo, a máquina escolheu um número aleatório entre 0 e 10. Você terá algumas chances de acertá-lo.");

let chute = 11;

for (n=0; n<3; n++){
    if (chute != random){
    chute = prompt(`Você possui ${3-n} tentativas. Chute um número.`);
    }else{
        alert (`Parabéns, o número era de fato ${chute}`);
    }
}

if  (chute != random){
    alert (`Que pena, o número aleatório era ${random}.`);
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
}