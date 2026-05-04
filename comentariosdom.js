const params = new URLSearchParams(window.location.search);
const capitulo = params.get("capitulo") || "I";
document.getElementById("titulo0Capitulo").textContent =
  "Anotações - Capítulo " + capitulo;

let anotacoes =
  JSON.parse(localStorage.getItem("anotacoes_capitulo_" + capitulo)) || [];

function atualizarLista() {
  const lista = document.getElementById("listaAnotacoes");
  lista.innerHTML = "";

  if (anotacoes.length === 0) {
    lista.innerHTML = "<p>Nenhuma anotação salva ainda.</p>";
  } else {
    anotacoes.forEach((texto, i) => {
      const div = document.createElement("div");
      div.classList.add("note-item");

      const p = document.createElement("span");
      p.textContent = i + 1 + ". " + texto;

      const btnExcluir = document.createElement("button");
      btnExcluir.textContent = "Excluir";
      btnExcluir.classList.add("delete-btn");
      btnExcluir.onclick = () => excluirAnotacao(i);

      div.appendChild(p);
      div.appendChild(btnExcluir);
      lista.appendChild(div);
    });
  }
}

function salvarAnotacao() {
  const texto = document.getElementById("anotacao").value.trim();
  if (texto) {
    anotacoes.push(texto);
    localStorage.setItem(
      "anotacoes_capitulo_" + capitulo,
      JSON.stringify(anotacoes),
    );
    document.getElementById("anotacao").value = "";
    atualizarLista();
  } else {
    alert("Digite algo antes de salvar!");
  }
}

function excluirAnotacao(index) {
  if (confirm("Tem certeza que deseja excluir esta anotação?")) {
    anotacoes.splice(index, 1);
    localStorage.setItem(
      "anotacoes_capitulo_" + capitulo,
      JSON.stringify(anotacoes),
    );
    atualizarLista();
  }
}

function voltar() {
  window.location.href = "dom casmurro.html";
}

atualizarLista();
