const textInput = document.getElementById("text-input");
const fontSizeSlider = document.getElementById("font-size-slider");
const textDisplay = document.getElementById("text-display");
const fontSizeValue = document.getElementById("font-size-value");

// Atualiza o texto exibido
textInput.addEventListener("input", () => {
  textDisplay.textContent = textInput.value;
});

// Atualiza o tamanho do texto e o valor em pixels
fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  textDisplay.style.fontSize = fontSize + "px";
  fontSizeValue.textContent = fontSize + "px";
});
