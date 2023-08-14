//Definindo todas as variáveis
let adicionar = "S";
let produto = "";
let fila = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (adicionar == "S"){
    adicionar = prompt (`Você deseja adicionar algum item em sua lista de compras? Responda com S ou N apenas`);
    if (adicionar == "S"){
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
            alert("Essa categoria não foi pré-definida.")
        }
    }
}

alert (`Lista de compras:\n
Frutas: ${frutas}.\n
Laticínios: ${laticinios}.\n
Congelados: ${congelados}.\n
Doces: ${doces}.\n`);