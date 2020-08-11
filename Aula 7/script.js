function sortear() {
  numeroSorteado = Math.round(Math.random() * 10);
  numeroEscolhido = parseInt(prompt("Escolha um número entre 1 e 10: "));

  while (
    !Number.isInteger(numeroEscolhido) ||
    numeroEscolhido < 0 ||
    numeroEscolhido > 10
  ) {
    paragrafoResultado.innerHTML = "Número inválido, tente novamente.";
    paragrafoResultado.style.backgroundColor = "yellow";
    numeroEscolhido = parseInt(prompt("Escolha um número entre 1 e 10: "));
  }

  if (numeroSorteado == numeroEscolhido) {
    paragrafoResultado.style.backgroundColor = "gray";
    paragrafoResultado.innerHTML = "Você ganhou o sorteio";
  } else {
    paragrafoResultado.style.backgroundColor = "red";
    paragrafoResultado.innerHTML = "Você não ganhou o sorteio";
  }
}
