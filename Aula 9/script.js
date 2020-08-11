function atualizarDados(){
 
  nomeExibicao.innerHTML = nome.value ? "Nome: " + nome.value : "";
  emailExibicao.innerHTML = email.value ? "E-mail: " + email.value : "";
  senhaExibicao.innerHTML = senha.value ? "Senha: "+ senha.value : "";
  dataNascimentoExibicao.innerHTML = dataNascimento.value ? "Data de nascimento: " + dataNascimento.value : "";
  alturaExibicao.innerHTML = altura.value ? "Altura: " + altura.value : "";
  pesoExibicao.innerHTML = peso.value ? "Peso: " + peso.value : "";
  //generoExibicao .innerHTML = genero.value;
}