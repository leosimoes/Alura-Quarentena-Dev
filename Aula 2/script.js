function exibirResultados(){
  var peso = prompt("Qual é o seu peso?");
  var altura = prompt("Qual é a sua altura?");
  
  document.getElementById('imc').innerHTML = "Resposta: " + significadoIMC(calcularIMC(peso,altura));
  
  document.getElementById('familiaGuilherme').innerHTML = "Resposta: " + mediaIdadesFamilaGuilherme();
  
  document.getElementById('idadeAvo').innerHTML = "Resposta: " + idadeAvoMaria();
  
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function significadoIMC(imc) {
  var significado = "inválido";
  if (imc < 0 || imc > 39.99){
    significado = "inválido (fora dos limites)";
  } else if (imc < 17) {
    significado = "Muito abaixo do peso";
  } else if (imc <= 18.49) {
    significado = "Abaixo do peso";
  } else if (imc <= 24.99) {
    significado = "Peso normal";
  } else if (imc <= 29.99) {
    significado = "Acima do peso";
  } else if (imc <= 34.99) {
    significado = "Obesidade I";
  } else if (imc <= 39.99) {
    significado = "Obesidade II";
  }
  return "O valor do IMC é " + Math.round(imc*100)/100 + " que significa " + significa + ".";
}

function calculaMediaIdades(idades) {
  var somaIdades = 0;
  for (i = 0; i < idades.length; i++) {
    somaIdades = somaIdades + idades[i];
  }
  return somaIdades / idades.length;
}

function mediaIdadesFamilaGuilherme() {
 var idades = [
    30, //Guilherme
    20, //Carol
    15, //Márcia
    10 // Patrícia
  ]; 

  var mediaIdades = Math.round(calculaMediaIdades(idades));
  return "A média (inteira) das idades da família de guilherme é " + mediaIdades +  ".";
}

function idadeAvoMaria(){
  diferencaAnos = new Date().getFullYear() - 1940;
  return diferencaAnos + " anos.";
}