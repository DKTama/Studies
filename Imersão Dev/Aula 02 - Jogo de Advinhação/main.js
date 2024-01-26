<<<<<<< HEAD
var numeroSecreto = parseInt(Math.random()*101);

var chute = prompt ("Digite um valor para tentar acertar o número secreto. Você possui 5 tentativas restantes.");

for (n=0; n<4; n++){
    if (chute<numeroSecreto){
        alert("O valor "+ chute + " é inferior ao número secreto.");
        chute = prompt(`Você possui ${4-n} tentativas restantes. Chute outro número.`);
    }else if (chute>numeroSecreto){
        alert("O valor "+ chute + " é superior ao número secreto.");
        chute = prompt(`Você possui ${4-n} tentativas restantes. Chute outro número.`);
    }else{
        alert ("Você acertou, o número secreto era "+chute+"! Você acerto em " + (5- n)+ " tentativas.");
    }
}


if  (chute != numeroSecreto){
    alert (`Que pena, o número aleatório era ${numeroSecreto}.`);
=======
var numeroSecreto = parseInt(Math.random()*101);

var chute = prompt ("Digite um valor para tentar acertar o número secreto. Você possui 5 tentativas restantes.");

for (n=0; n<4; n++){
    if (chute<numeroSecreto){
        alert("O valor "+ chute + " é inferior ao número secreto.");
        chute = prompt(`Você possui ${4-n} tentativas restantes. Chute outro número.`);
    }else if (chute>numeroSecreto){
        alert("O valor "+ chute + " é superior ao número secreto.");
        chute = prompt(`Você possui ${4-n} tentativas restantes. Chute outro número.`);
    }else{
        alert ("Você acertou, o número secreto era "+chute+"! Você acerto em " + (5- n)+ " tentativas.");
    }
}


if  (chute != numeroSecreto){
    alert (`Que pena, o número aleatório era ${numeroSecreto}.`);
>>>>>>> 9fddb904b4c31fa9be70aa732dab05d8b2f0fc87
}