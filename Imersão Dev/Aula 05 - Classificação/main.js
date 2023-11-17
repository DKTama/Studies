var listaTimes = [];
var elementoTabela = document.getElementById("tabelaTimes");


function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaTimes.forEach((time, index) => {
    console.log(time);
    elementoTabela.innerHTML += `
        <tr>
            <td><img src="${time.logo}" width="25" height="25"></td>
            <td>${time.nome}</td>
            <td>${time.vitoria}</td>
            <td>${time.empate}</td>
            <td>${time.derrota}</td>
            <td>${time.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoTime(${index})">Limpar Registros</button></td>
            <td><button onClick="removerTime(${index})">Apagar Time</button></td>
          </tr>
    `;
  });
}

function criarTime() {
  //verificar se time ja existe ou não
  var nomeNovoTime = document.getElementById("campoNomeTime").value;
  var logoNovoTime = document.getElementById("campoLogoTime").value;
  listaTimes.push({
    logo: logoNovoTime,
    nome: nomeNovoTime,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
    });
    document.getElementById("campoNomeTime").value = "";
    document.getElementById("campoLogoTime").value="";
    exibirNaTela();
}

function adicionarVitoria(index) {
    listaTimes[index].vitoria++;
    listaTimes[index].pontos = listaTimes[index].pontos + 3;
    exibirNaTela();
}

function adicionarEmpate(index) {
    listaTimes[index].empate++;
    listaTimes[index].pontos++;
    exibirNaTela();
}

function adicionarDerrota(index) {
    listaTimes[index].derrota++;
    exibirNaTela();
}

function limparPontuacaoTime(index) {
    listaTimes[index].vitoria = 0;
    listaTimes[index].empate = 0;
    listaTimes[index].derrota = 0;
    listaTimes[index].pontos = 0;
    exibirNaTela();
}

function removerTime(index) {
    listaTimes.splice(index, 1);
    exibirNaTela();
}

function apagarJogadores() {
    listaTimes = [];
    exibirNaTela();
}


function validarPontos(){
    var somaVitorias = 0;
    var someDerrotas = 0;
    var somaEmpates = 0;

    listaTimes.forEach((time, index) => {
    somaVitorias += time.vitoria;
    someDerrotas += time.derrota;
    somaEmpates += time.empate;
      });
    
    if (somaVitorias!=someDerrotas||somaEmpates% 2 != 0){
    alert("Por favor checar a pontuação, ela não está válida.");
    }else{
        alert("Pontuação válida!");
    }
}