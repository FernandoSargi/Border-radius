// Função para atualizar o box-shadow
function updateBoxShadow() {
  const hOffset = document.getElementById("h-offset").value;
  const vOffset = document.getElementById("v-offset").value;
  const blur = document.getElementById("blur").value;
  const shadowColor = document.getElementById("shadow-color").value;

  const quadrado = document.getElementById("quadrado");
  quadrado.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${shadowColor}`;

  // Atualiza o valor exibido do desfoque
  document.getElementById("blur-value").textContent = `${blur}px`;
}

// Adiciona eventos de input para atualizar em tempo real
document.getElementById("h-offset").addEventListener("input", updateBoxShadow);
document.getElementById("v-offset").addEventListener("input", updateBoxShadow);
document.getElementById("blur").addEventListener("input", updateBoxShadow);
document
  .getElementById("shadow-color")
  .addEventListener("input", updateBoxShadow);

// Adiciona evento de click para o botão "Aplicar Sombra"
document.getElementById("apply-shadow").addEventListener("click", function () {
  updateBoxShadow(); // Chama a função de atualização
});

// Função para trocar a cor do quadrado
function changeSquareColor() {
  const quadrado = document.getElementById("quadrado");
  const newColor =
    prompt(
      "Digite a nova cor do quadrado (ex: red, #ff0000, rgb(255, 0, 0))",
      quadrado.style.backgroundColor
    ) || quadrado.style.backgroundColor;
  quadrado.style.backgroundColor = newColor;
}

// Adiciona evento de click para trocar a cor do quadrado
document
  .getElementById("change-color")
  .addEventListener("click", changeSquareColor);

// Função para resetar a sombra e a cor do quadrado
function resetShadow() {
  const quadrado = document.getElementById("quadrado");
  quadrado.style.boxShadow = "none"; // Remove a sombra
  quadrado.style.backgroundColor = "#007bff"; // Reseta a cor do quadrado para o padrão
  document.getElementById("h-offset").value = 10; // Reseta o deslocamento horizontal
  document.getElementById("v-offset").value = 10; // Reseta o deslocamento vertical
  document.getElementById("blur").value = 20; // Reseta o desfoque
  document.getElementById("shadow-color").value = "#000000"; // Reseta a cor da sombra
  updateBoxShadow(); // Atualiza a sombra
}

// Adiciona evento de click para resetar a sombra
document.getElementById("reset-shadow").addEventListener("click", resetShadow);

// Chama a função uma vez para aplicar os valores iniciais
updateBoxShadow();
