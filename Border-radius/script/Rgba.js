const colorSquare = document.getElementById("color-square");
const colorPicker = document.getElementById("color-picker");
const colorCodeText = document.getElementById("color-code");
const rgbaCodeText = document.getElementById("rgba-code");

// Função para converter hexadecimal para rgba
function hexToRgba(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

// Função para atualizar a cor do quadrado e os códigos de cor
function updateColor() {
  const selectedColor = colorPicker.value;
  colorSquare.style.backgroundColor = selectedColor;
  colorCodeText.textContent = `Código de cor (Hex): ${selectedColor}`;
  rgbaCodeText.textContent = `Código de cor (RGBA): ${hexToRgba(
    selectedColor
  )}`;
}

// Evento para atualizar a cor em tempo real ao selecionar na paleta de cores
colorPicker.addEventListener("input", updateColor);

// Chama a função uma vez para aplicar a cor inicial
updateColor();
