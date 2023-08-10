//Pergunta inicial, para saber se o usuário irá para Front End ou Back End
const area = prompt("Olá! Você deseja seguir para Front-End (1) ou Back-End? (2)");

if (area == "1"){
    const especializacao = prompt("Legal! Prefere aprender React ou Vue?");
} else if (area == "2") {
    const especializacao = prompt("Legal! Prefere aprender C# ou Java?");
} else {
    alert("Por favor, responder apenas com 1 para Front-End ou 2 para Back-End.")
}

//Segunda pergunta, para saber se seguirá na especialização ou esturará para Full Stack
const seguir = prompt(`Depois disso, deseja seguir se especializando na sua área (1)? Ou deseja virar FullStack (2)?`);

if (seguir == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (seguir == 2) {
    alert("Muito bom! Diversificar o conhecimento poderá te ajudar no futuro.");
} else {
    alert(`Por favor, responder apenas com 1 para continuar com  ${area} ou 2 para virar FullStack.`)
}


//Ultima pergunta, para saber se há mais tecnologias para serem aprendidas
//IMPORTANTE: usar let ao invés de const para poder alterar o valor da variável
let continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");

//Loop enquanto for preenchido o campo
while (continuar != null){
    alert(`Boa opção, sempre é bom aprender ${continuar} também.`)
    continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
}
