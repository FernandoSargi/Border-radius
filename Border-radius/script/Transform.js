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

const cssOutput = document.getElementById("cssOutput");

function updateTransform() {
  const rotateX = rotateXInput.value;
  const rotateY = rotateYInput.value;
  transformBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Atualiza o CSS exibido
  const cssCode = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
  cssOutput.textContent = cssCode;

  // Atualiza os valores exibidos
  rotateXValue.textContent = `${rotateX}°`;
  rotateYValue.textContent = `${rotateY}°`;
}

function copyCSS() {
  const cssCode = cssOutput.textContent;
  navigator.clipboard
    .writeText(cssCode)
    .then(() => alert("CSS copiado com sucesso!"))
    .catch((err) => console.error("Erro ao copiar CSS:", err));
}

copyButton.addEventListener("click", copyCSS);

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll(".sidebar a");

// Loop pelos links de navegação
navLinks.forEach((link) => {
  // Verifica se o href do link corresponde ao caminho atual
  if (link.getAttribute("href") === currentPath) {
    // Adiciona a classe 'active' ao link correspondente
    link.classList.add("active");
  }
});
