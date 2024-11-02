const transformBox = document.getElementById("transform-box");
const rotateXInput = document.getElementById("rotateX");
const rotateYInput = document.getElementById("rotateY");
const rotateXValue = document.getElementById("rotateXValue");
const rotateYValue = document.getElementById("rotateYValue");
const resetButton = document.getElementById("resetButton");

function updateTransform() {
  const rotateX = rotateXInput.value;
  const rotateY = rotateYInput.value;
  transformBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Atualiza os valores exibidos
  rotateXValue.textContent = `${rotateX}°`;
  rotateYValue.textContent = `${rotateY}°`;
}

function resetTransform() {
  rotateXInput.value = 0;
  rotateYInput.value = 0;
  updateTransform(); // Atualiza a transformação após redefinir os valores
}

// Adiciona os ouvintes de evento
rotateXInput.addEventListener("input", updateTransform);
rotateYInput.addEventListener("input", updateTransform);
resetButton.addEventListener("click", resetTransform);
