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
