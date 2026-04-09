    function fazerLogin() {
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      if (usuario === "admin" && senha === "1234") {
        window.location.href = "index.html"; // redireciona para sua página principal
      } else {
        alert("Usuário ou senha inválidos!");
      }
    }