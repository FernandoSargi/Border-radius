const radiusInput = document.getElementById("radius-input");
const radiusValue = document.getElementById("radius-value");
const shadowInput = document.getElementById("shadow-input");
const colorInput = document.getElementById("color-input");
const previewBox = document.getElementById("preview-box");

radiusInput.addEventListener("input", () => {
  const radius = radiusInput.value;
  radiusValue.textContent = `${radius}px`; // Atualiza o valor mostrado
  previewBox.style.borderRadius = `${radius}px`; // Aplica o border-radius ao quadrado
});

shadowInput.addEventListener("input", () => {
  const shadowSize = shadowInput.value;
  previewBox.style.boxShadow = `0px 0px ${shadowSize}px rgba(0, 0, 0, 0.5)`; // Aplica a sombra ao quadrado
});

colorInput.addEventListener("input", () => {
  const color = colorInput.value;
  previewBox.style.backgroundColor = color; // Aplica a cor de fundo ao quadrado
});
