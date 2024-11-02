const gradientSquare = document.getElementById("gradient-square");
const colorPicker1 = document.getElementById("color-picker1");
const colorPicker2 = document.getElementById("color-picker2");

// Função para atualizar o gradiente
function updateGradient() {
  const color1 = colorPicker1.value;
  const color2 = colorPicker2.value;

  gradientSquare.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Eventos para atualizar o gradiente em tempo real ao selecionar cores
colorPicker1.addEventListener("input", updateGradient);
colorPicker2.addEventListener("input", updateGradient);

// Chama a função uma vez para aplicar o gradiente inicial
updateGradient();
