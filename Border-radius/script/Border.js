const borderLine = document.getElementById("border-line");
const borderStyleSelect = document.getElementById("border-style");
const borderWidthInput = document.getElementById("border-width");
const borderColorInput = document.getElementById("border-color");
const borderWidthValue = document.getElementById("border-width-value");

function updateBorder() {
  const style = borderStyleSelect.value;
  const width = borderWidthInput.value;
  const color = borderColorInput.value;

  borderLine.style.borderStyle = style;
  borderLine.style.borderWidth = `${width}px`;
  borderLine.style.borderColor = color;

  // Exibir o valor da espessura
  borderWidthValue.textContent = width;
}

// Eventos para atualizar a borda em tempo real
borderStyleSelect.addEventListener("change", updateBorder);
borderWidthInput.addEventListener("input", updateBorder);
borderColorInput.addEventListener("input", updateBorder);
