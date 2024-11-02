const quadrado = document.getElementById("quadrado");
const radiusRange = document.getElementById("radiusRange");
const radiusValue = document.getElementById("singleRadiusValue");
let isDragging = false;

// Função para atualizar o border-radius com um único controle
function updateSingleRadius() {
  const borderRadius = radiusRange.value;
  quadrado.style.borderRadius = `${borderRadius}px`;
  radiusValue.textContent = `${borderRadius}px`;
}

// Função para ajustar cada canto do quadrado separadamente
function updateBorderRadius() {
  const topLeft = document.getElementById("topLeft").value;
  const topRight = document.getElementById("topRight").value;
  const bottomRight = document.getElementById("bottomRight").value;
  const bottomLeft = document.getElementById("bottomLeft").value;

  quadrado.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
  document.getElementById("topLeftValue").textContent = `${topLeft}px`;
  document.getElementById("topRightValue").textContent = `${topRight}px`;
  document.getElementById("bottomRightValue").textContent = `${bottomRight}px`;
  document.getElementById("bottomLeftValue").textContent = `${bottomLeft}px`;
}

// Função para habilitar o modo arrastar
function toggleDragMode() {
  const dragMode = document.getElementById("dragMode").checked;
  isDragging = dragMode;

  if (isDragging) {
    quadrado.addEventListener("mousemove", handleDrag);
  } else {
    quadrado.removeEventListener("mousemove", handleDrag);
  }
}

// Função de arrastar para alterar o tamanho
function handleDrag(event) {
  if (isDragging) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const radiusX = Math.min(offsetX, 100);
    const radiusY = Math.min(offsetY, 100);

    quadrado.style.borderRadius = `${radiusX}px ${
      100 - radiusX
    }px ${radiusY}px ${100 - radiusY}px`;
    document.getElementById("dragRadiusValue").textContent = `${radiusX}px ${
      100 - radiusX
    }px ${radiusY}px ${100 - radiusY}px`;
  }
}

// Função para resetar o border-radius do quadrado
function resetBorderRadius() {
  quadrado.style.borderRadius = "0px";
  radiusRange.value = 0;
  document.getElementById("topLeft").value = 0;
  document.getElementById("topRight").value = 0;
  document.getElementById("bottomRight").value = 0;
  document.getElementById("bottomLeft").value = 0;

  // Atualiza os valores exibidos
  radiusValue.textContent = "0px";
  document.getElementById("topLeftValue").textContent = "0px";
  document.getElementById("topRightValue").textContent = "0px";
  document.getElementById("bottomRightValue").textContent = "0px";
  document.getElementById("bottomLeftValue").textContent = "0px";
  document.getElementById("dragRadiusValue").textContent = "0px 0px 0px 0px";
}

// Adiciona eventos de mudança ao controle de modo normal
radiusRange.addEventListener("input", updateSingleRadius);

// Adiciona eventos de mudança aos controles de lados
document
  .getElementById("topLeft")
  .addEventListener("input", updateBorderRadius);
document
  .getElementById("topRight")
  .addEventListener("input", updateBorderRadius);
document
  .getElementById("bottomRight")
  .addEventListener("input", updateBorderRadius);
document
  .getElementById("bottomLeft")
  .addEventListener("input", updateBorderRadius);
