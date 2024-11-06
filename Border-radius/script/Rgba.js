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

const copyHexButton = document.getElementById("copy-hex");
const copyRgbaButton = document.getElementById("copy-rgba");

// Função para copiar o código de cor
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Código copiado para a área de transferência!");
  });
}

// Adiciona eventos aos botões de copiar
copyHexButton.addEventListener("click", () => {
  copyToClipboard(
    colorCodeText.textContent.replace("Código de cor (Hex): ", "")
  );
});

copyRgbaButton.addEventListener("click", () => {
  copyToClipboard(
    rgbaCodeText.textContent.replace("Código de cor (RGBA): ", "")
  );
});

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
