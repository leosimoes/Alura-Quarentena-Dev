var numeroLikes = 0;

function adicionarLike() {
  numeroLikes = numeroLikes + 1;
  if (numeroLikes == 1) {
    botao.innerHTML = numeroLikes + " Like";
  } else {
    botao.innerHTML = numeroLikes + " Likes";
  }
}
