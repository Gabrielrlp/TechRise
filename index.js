      function buscarLivros() {
            const termo = document.getElementById('searchInput').value.toLowerCase();
            const livros = document.querySelectorAll('.book-item');

            livros.forEach((livro) => {
                const titulo = livro.querySelector('h2').textContent.toLowerCase();
                const descricao = livro.querySelector('p').textContent.toLowerCase();

                if (titulo.includes(termo) || descricao.includes(termo)) {
                    livro.style.display = 'block';
                } else {
                    livro.style.display = 'none';
                }
            });
        }

        function limparBusca() {
            document.getElementById('searchInput').value = '';
            const livros = document.querySelectorAll('.book-item');
            livros.forEach((livro) => (livro.style.display = 'block'));
        }

        function alternarTema() {

  document.body.classList.toggle('dark-mode');
}

window.onscroll = function () {
  document.getElementById("btnTopo").style.display =
    document.documentElement.scrollTop > 100 ? "block" : "none";
};
function topo() {
  document.documentElement.scrollTop = 0;
}
  function filtrarCategoria() {
    const categoriaSelecionada = document.getElementById("filtroCategoria").value;
    const livros = document.querySelectorAll(".book-item");

    livros.forEach((livro) => {
      const categoria = livro.getAttribute("data-categoria");
      if (categoriaSelecionada === "todos" || categoria === categoriaSelecionada) {
        livro.style.display = "block";
      } else {
        livro.style.display = "none";
      }
    });
  }

function marcarFavorito(botao) {
    const livro = botao.closest('.book-item');
    livro.classList.toggle('favorito');
}

function marcarConcluido(botao) {
    const livro = botao.closest('.book-item');
    livro.classList.toggle('Concluido');
}

function mostrarDestaques() {
    const livros = document.querySelectorAll(".book-item");
    livros.forEach((livro) => {
        const destaque = livro.getAttribute("data-destaque");
        livro.style.display = destaque === "true" ? "block" : "none";
    });
}
function mostrarFavoritos() {
    const livros = document.querySelectorAll(".book-item");
    livros.forEach((livro) => {
        livro.style.display = livro.classList.contains("favorito") ? "block" : "none";
    });
}

function mostrarConcluido() {
    const livros = document.querySelectorAll(".book-item");
    livros.forEach((livro) => {
        livro.style.display = livro.classList.contains("Concluido") ? "block" : "none";
    });
}

function mostrarSugestoes() {
  const input = document.getElementById("searchInput");
  const termo = input.value.toLowerCase();
  const sugestoesDiv = document.getElementById("sugestoes");
  sugestoesDiv.innerHTML = "";

  if (!termo) {
    sugestoesDiv.style.display = "none";
    return;
  }

  const livros = document.querySelectorAll(".book-item h2");
  const encontrados = [];

  livros.forEach((livro) => {
    const titulo = livro.textContent.toLowerCase();
    if (titulo.includes(termo)) {
      encontrados.push(livro.textContent);
    }
  });

  if (encontrados.length > 0) {
    encontrados.forEach((titulo) => {
      const sugestao = document.createElement("div");
      sugestao.textContent = titulo;
      sugestao.onclick = () => {
        input.value = titulo;
        sugestoesDiv.innerHTML = "";
        sugestoesDiv.style.display = "none";
        buscarLivros();
      };
      sugestoesDiv.appendChild(sugestao);
    });
    sugestoesDiv.style.display = "block";
  } else {
    sugestoesDiv.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (!document.querySelector(".search-bar").contains(e.target)) {
    document.getElementById("sugestoes").style.display = "none";
  }
});