const nomeElemento = document.getElementById("nomeTroca");

const nomes = ["Pedro Henrique", "FresnedaTech"];
let index = 0;

setInterval(() => {
  nomeElemento.classList.add("slide-up");

  setTimeout(() => {
    index = (index + 1) % nomes.length;
    nomeElemento.textContent = nomes[index];

    nomeElemento.classList.remove("slide-up");
  }, 400);
}, 3000); // troca a cada 3s
