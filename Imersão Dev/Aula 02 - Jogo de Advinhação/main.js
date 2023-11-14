var numeroSecreto = parseInt(Math.random()*101);
var tentativas = 4;

    var chute = prompt ("Digite um valor para tentar acertar o número secreto. Você possui "+(tentativas+1)+" tentativas restantes.");

while (chute != numeroSecreto && tentativas>0){
    if (chute<numeroSecreto){
        alert("O valor "+ chute + " é inferior ao número secreto.");
    }else{
        alert("O valor "+ chute + " é superior ao número secreto.");
    }
    tentativas--;
    chute = prompt ("Digite um número para tentar acertar o secreto. Você possui "+(tentativas+1)+" tentativas restantes.");
}

if (tentativas===0 && chute != numeroSecreto){ 
    alert ("Você perdeu. O número correto era "+numeroSecreto+".");
}else{ 
    alert ("Você acertou, o número secreto era "+chute+"! Você acerto em " + (5- tentativas)+ " tentativas.");
}