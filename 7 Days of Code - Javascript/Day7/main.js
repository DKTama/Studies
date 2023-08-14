//Declarando as variáveis que serão utilizadas
let n1 = "";
let n2 = "";
let operacao ="";


//Funções para cada operação, sendo necessário converser a String dos números para Integral
function soma (n1,n2){
alert (`Resultado é ${parseInt(n1) + parseInt(n2)}`);
}

function subtracao (n1,n2){
    alert (`Resultado é ${parseInt(n1) - parseInt(n2)}`);
}

function multiplicacao (n1,n2){
    alert (`Resultado é ${parseInt(n1) * parseInt(n2)}`);
}

function divisao (n1,n2){
    alert (`Resultado é ${parseInt(n1) / parseInt(n2)}`);
}

//Para continuar no loop de gerar novas operações, a operação não pode ser de sair
while (operacao != "sair"){
operacao = prompt("Qual operação deseja realizar? Utilize as opções com os símbolos: +, -, *, / ou sair");

//Os números devem ser questionados apenas caso a operação não seja sair, logo estão dentro de um if
if (operacao != "sair"){
n1 = prompt ("Por favor digite o primeiro digito");
n2 =prompt ("Por favor digite o segundo digito");
}

//Switch para chamar cada função, declaradas no início do código
switch (operacao){
    case '+':
        soma(n1,n2);
        break;
    case '-':
        subtracao(n1,n2);
        break;
    case '*':
        multiplicacao(n1,n2);
        break;
    case '/':
        divisao(n1,n2);
        break;
}
}