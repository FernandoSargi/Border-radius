const quadrado = document.getElementById("quadrado");
const hOffsetInput = document.getElementById("h-offset");
const vOffsetInput = document.getElementById("v-offset");
const blurInput = document.getElementById("blur");
const shadowColorInput = document.getElementById("shadow-color");
const infoText = document.getElementById("infoText");
const copyButton = document.getElementById("copyButton");

// Função para atualizar o box-shadow
function updateBoxShadow() {
  const hOffset = hOffsetInput.value;
  const vOffset = vOffsetInput.value;
  const blur = blurInput.value;
  const shadowColor = shadowColorInput.value;

  quadrado.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${shadowColor}`;

  // Atualiza o texto a ser copiado
  infoText.textContent = `Box Shadow: ${hOffset}px ${vOffset}px ${blur}px ${shadowColor}`;
}

// Adiciona eventos de input para atualizar em tempo real
hOffsetInput.addEventListener("input", updateBoxShadow);
vOffsetInput.addEventListener("input", updateBoxShadow);
blurInput.addEventListener("input", updateBoxShadow);
shadowColorInput.addEventListener("input", updateBoxShadow);

// Adiciona evento de click para o botão "Aplicar Sombra"
document
  .getElementById("apply-shadow")
  .addEventListener("click", updateBoxShadow);

// Função para trocar a cor do quadrado
function changeSquareColor() {
  const newColor =
    prompt(
      "Digite a nova cor do quadrado (ex: red, #ff0000, rgb(255, 0, 0))"
    ) || quadrado.style.backgroundColor;
  quadrado.style.backgroundColor = newColor;
}

// Adiciona evento de click para trocar a cor do quadrado
document
  .getElementById("change-color")
  .addEventListener("click", changeSquareColor);

// Função para resetar a sombra e a cor do quadrado
function resetShadow() {
  quadrado.style.boxShadow = "none"; // Remove a sombra
  quadrado.style.backgroundColor = "#007bff"; // Reseta a cor do quadrado para o padrão
  hOffsetInput.value = 10; // Reseta o deslocamento horizontal
  vOffsetInput.value = 10; // Reseta o deslocamento vertical
  blurInput.value = 20; // Reseta o desfoque
  shadowColorInput.value = "#000000"; // Reseta a cor da sombra
  updateBoxShadow(); // Atualiza a sombra
}

// Adiciona evento de click para resetar a sombra
document.getElementById("reset-shadow").addEventListener("click", resetShadow);

// Função para copiar as informações
function copyInfoText() {
  const textToCopy = infoText.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch((err) => {
      alert("Falha ao copiar: ", err);
    });
}

// Evento para copiar as informações quando o botão é clicado
copyButton.addEventListener("click", copyInfoText);

// Chama a função uma vez para aplicar os valores iniciais
updateBoxShadow();
