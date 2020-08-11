function exibirResultados(){
   document.getElementById('batimentos').innerHTML = "Resposta: " + calcularBatimentos() + " batimentos.";
  
  document.getElementById('galinhas').innerHTML = "Resposta: " + calcularPrecoGalinhas() + " galinhas.";
  
  document.getElementById('balas').innerHTML = "Resposta: " + calcularBalas() + " balas.";
  
  document.getElementById('areaCircunferencia').innerHTML = "Resposta: " + areaCircunferencia() + " u quadrados.";
}

function calcularBatimentos(){
  const batimentosPorMinuto = 75;
  const idadeAnos = 27;
  return batimentosPorMinuto * idadeAnos * 365 * 24 * 60;        
}

function calcularPrecoGalinhas(){
  return 300/15;
}

function calcularBalas(){
  return 19 + 45;
}

function areaCircunferencia(){
  const PI = 3.14;
  const raio = 2;
  return PI * raio * raio;
}