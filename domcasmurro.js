let fonte = 1.1;
let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");

function alterarFonte(delta) {
  fonte += delta * 0.1;
  document.getElementById("livro").style.fontSize = fonte + "em";
}

function modoLeitura(modo) {
  document.body.className = "";
  if (modo === "escuro") document.body.classList.add("dark");
  else if (modo === "sepia") document.body.classList.add("sepia");
}

function mostrarPagina(index) {
  paginas.forEach((p, i) => {
    p.style.display = i === index ? "block" : "none";
  });
}

function proximaPagina() {
  if (paginaAtual < paginas.length - 1) {
    paginaAtual++;
    mostrarPagina(paginaAtual);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function paginaAnterior() {
  if (paginaAtual > 0) {
    paginaAtual--;
    mostrarPagina(paginaAtual);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

mostrarPagina(paginaAtual);

const btnMarcaTexto = document.getElementById("btnMarcaTexto");
let modoMarcaTexto = false;

// Alternar modo de marca-texto
btnMarcaTexto.addEventListener("click", () => {
  modoMarcaTexto = !modoMarcaTexto;
  btnMarcaTexto.classList.toggle("ativo", modoMarcaTexto);
});

// Aplicar marca-texto na seleção
document.addEventListener("mouseup", () => {
  if (!modoMarcaTexto) return;

  let selecao = window.getSelection();
  if (selecao.toString().trim() !== "") {
    let range = selecao.getRangeAt(0);
    let mark = document.createElement("mark");
    range.surroundContents(mark);
    selecao.removeAllRanges();
  }
});