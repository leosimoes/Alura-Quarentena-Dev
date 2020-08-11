function exibirResultados(){
  distancia = prompt("Qual a distância que você andou com o passageiro ou passageira?");
tempo = prompt("Qual foi o tempo da viagem?");
  
document.getElementById('valor_corrida').innerHTML = "Resposta: " + "O valor da sua corrida foi: R$ " + calculaCombustivel().toFixed(2);

}

function calculaValorCorrida(distancia, tempo){
  return 2 + distancia * 1.4 + tempo  * 0.26;
}