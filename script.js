const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const pergunta = document.getElementById("pergunta");
const ursinho = document.getElementById("ursinho");
function fugir(){
    const largura = 
    window.innerWidth;
    const altura = 
    window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const posicaoX = Math.random()*(largura - larguraBotao);
    const posicaoY = Math.random()* (altura - alturaBotao);

    botaoNao.style.position = "fixed";
    botaoNao.style.left = posicaoX + "px";
    botaoNao.style.top = posicaoY + "px";
}
botaoNao.addEventListener("mouseover", fugir);
botaoNao.addEventListener("touchstart", fugir);

botaoSim.addEventListener("click", function () {
  pergunta.textContent = "ENTÃO ESSE É O COMEÇO DA NOSSA HISTÓRIA!!!";
  ursinho.src = "ursinho-sim.png";
  for (let i = 0; i < 30; i++) {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
coracao.textContent = "❤️";
coracao.style.left = Math.random() * 100 + "vw";
coracao.style.animationDelay = Math.random() * 2 + "s";
coracao.style.fontSize = 16 + Math.random() * 24 + "px";
//nao sei como fiz, mas funciona//
document.body.appendChild (coracao);
setTimeout(() => {
    coracao.remove();
}, 5000);
  }
  botaoSim.style.display = "none";
  botaoNao.style.display = "none";
});

