function mostrar(secao){

  const secoes = document.querySelectorAll(".conteudo");

  secoes.forEach(s => {
    s.style.display = "none";
  });

  const alvo = document.getElementById(secao);

  if(alvo){
    alvo.style.display = "block";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

window.onload = () => {
  mostrar("home");
};

function responder(resp){

  const resultado = document.getElementById("resultadoQuiz");

  if(resp === "certo"){
    resultado.innerHTML = "✔ Correto! A energia solar é renovável.";
    resultado.style.color = "#7CFC00";
  }
  else{
    resultado.innerHTML = "❌ Errado! Tente novamente.";
    resultado.style.color = "#ff6b6b";
  }
}