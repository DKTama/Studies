//Definindo todas as variáveis
let adicionar = "adicionar";
let produto = "";
let fila = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (adicionar == "adicionar"){
    if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
    adicionar = prompt (`Você deseja adicionar algum item em sua lista de compras? Responda com 'adicionar' ou 'não' apenas`);
    }else{
        adicionar = prompt (`Você deseja adicionar ou remover algum item em sua lista de compras? Responda com 'adicionar', 'não' ou 'remover' apenas`);
    }

    if (adicionar == "não") {
        break;
    }

    if (adicionar == "adicionar"){
        produto = prompt ("Deseja adicionar qual produto?");
        fila = prompt ("Em qual categoria este produto se encaixa? Frutas, Laticínios, Congelados, Doces?")
        if (fila=="Frutas"){
            frutas.push(produto);
        }else if (fila== "Laticinios"){
            laticinios.push(produto);
        }else if (fila=="Congelados"){
            congelados.push(produto);
        }else if (fila=="Doces"){
            doces.push(produto);
        } else {
            alert("Essa categoria não foi pré-definida.");
        }
    }

    else if (adicionar == "remover"){
        alert (`Lista de compras:\n
        Frutas: ${frutas}.\n
        Laticínios: ${laticinios}.\n
        Congelados: ${congelados}.\n
        Doces: ${doces}.\n`);

        produto = prompt("Qual produto deseja remover de sua lista?");

        if (frutas.indexOf(produto) != -1){
			frutas.splice(frutas.indexOf(produto), 1);
			alert(`O item ${produto} foi removido com sucesso!`);
        } else if (laticinios.indexOf(produto) != -1){
			frutas.splice(laticinios.indexOf(produto), 1);
			alert(`O item ${produto} foi removido com sucesso!`);
        }else if (congelados.indexOf(produto) != -1){
			frutas.splice(congelados.indexOf(produto), 1);
			alert(`O item ${produto} foi removido com sucesso!`);
        }else if (doces.indexOf(produto) != -1){
            frutas.splice(doces.indexOf(produto), 1);
            alert(`O item ${produto} foi removido com sucesso!`);
        }
    }
}


alert (`Lista de compras:\n
Frutas: ${frutas}.\n
Laticínios: ${laticinios}.\n
Congelados: ${congelados}.\n
Doces: ${doces}.\n`);