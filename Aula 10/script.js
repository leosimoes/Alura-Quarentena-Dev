function gerar(){
  contador=1000000
  while(contador>0){
    contador=contador-1
    htmldocertificado=emitirCertificado(inputNome.value)
  }
  
  listalink=[
    "https://codepen.io/theamandaalmeida/pen/qBdwaab",
    "https://codepen.io/theamandaalmeida/pen/wvabevv"
  ]
  contalink=0
  listalinkcomhtml=""
  while(contalink<2){

    link=listalink[contalink]
    listalinkcomhtml=`<li>${link}</li>`+listalinkcomhtml
    contalink=contalink+1
  }

  document.body.innerHTML=
    `${htmldocertificado}
      <ol>
      ${listalinkcomhtml}   
      </ol>

`
  print();
}