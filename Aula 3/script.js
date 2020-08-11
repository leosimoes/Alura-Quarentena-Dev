function exibirResultados(){
  
  alert("Oi\ncomo\nvocê\nestá\npulando\nlinha\n?\n");
  
  document.getElementById('pulaLinha').innerHTML = "Reposta:" +"<br/>Oi<br/>como<br/>você<br/>está<br/>pulando<br/>linha<br/>?";
  
  document.getElementById('consumo').innerHTML = "Resposta: " + calculaCombustivel() + " litros.";
  
}

function exibirTextoPulandoLinha_Alert(){
  alert("Oi\ncomo\nvocê\nestá\npulando\nlinha\n?\n");
}

function calculaCombustivel(){
  var consumo = 12; //km/l
  var tempo = 10; //horas
  var velocidade = 81; //km/h
  return (velocidade * tempo)/consumo;
}

