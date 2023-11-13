var valorEmDolar = prompt("Qual valor em Dólar deseja converter?");
var cotacaoDolar = prompt("Qual a cotação atual do Dólar para Reais?");

var valorEmReal = valorEmDolar * cotacaoDolar;

valorEmReal = valorEmReal.toFixed(2);

alert("R$" + valorEmReal);

var valorEmIene = prompt("Qual valor em Iene deseja converter?");
var cotacaoIene = prompt("Qual a cotação atual do Iene para Reais?");

valorEmReal = valorEmIene*cotacaoIene;
valorEmReal = valorEmReal.toFixed(2);

alert("R$" + valorEmReal);
