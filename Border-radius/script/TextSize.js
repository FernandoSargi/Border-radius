const textInput = document.getElementById("text-input");
const fontSizeSlider = document.getElementById("font-size-slider");
const textDisplay = document.getElementById("text-display");
const fontSizeValue = document.getElementById("font-size-value");
const infoText = document.getElementById("infoText");
const copyButton = document.getElementById("copyButton");

// Atualiza o texto exibido
textInput.addEventListener("input", () => {
  textDisplay.textContent = textInput.value;
});

// Atualiza o tamanho do texto e o valor em pixels
fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  textDisplay.style.fontSize = fontSize + "px";
  fontSizeValue.textContent = fontSize + "px";

  // Atualiza o texto a ser copiado
  infoText.textContent = `Tamanho do Texto: ${fontSize}px`;
});

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
