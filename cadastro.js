function cadastrarUsuario() {
  const usuario = document.getElementById("novoUsuario").value;
  const email = document.getElementById("novoEmail").value;
  const senha = document.getElementById("novaSenha").value;

  if (usuario && email && senha) {
    alert(
      "Cadastro realizado com sucesso!\nAgora faça login para acessar o site.",
    );
    window.location.href = "login.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
