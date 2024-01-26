var temperaturaCelsius = prompt("Qual a temperatura em Celsius deseja converter?");

var temperaturaKelvin = parseInt(temperaturaCelsius)+273;
var temperaturaFahrenheit = parseInt(temperaturaCelsius)*1.8+32;

alert("A temperatura de " + temperaturaCelsius+"°C é equivalente a "+ temperaturaKelvin + "K; ou então a "+temperaturaFahrenheit+"°F.")