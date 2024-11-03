document.querySelectorAll(".effect-button").forEach((button) => {
  button.addEventListener("click", function () {
    const effect = this.getAttribute("data-effect");
    applyMouseEffect(effect);
  });
});

function applyMouseEffect(effect) {
  // Se o efeito for normal, reseta o cursor
  if (effect === "normal") {
    document.body.style.cursor = "auto"; // Resetando para o cursor padrão
  } else {
    document.body.style.cursor = effect; // Aplica o efeito escolhido
  }
}

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll(".sidebar a");

// Loop pelos links de navegação
navLinks.forEach((link) => {
  // Verifica se o href do link corresponde ao caminho atual
  if (link.getAttribute("href") === currentPath) {
    // Adiciona a classe 'active' ao link correspondente
    link.classList.add("active");
  }
});
