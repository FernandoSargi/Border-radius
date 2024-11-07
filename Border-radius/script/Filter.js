const image = document.getElementById("image");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const saturate = document.getElementById("saturate");
const grayscale = document.getElementById("grayscale");
const sepia = document.getElementById("sepia");
const resetButton = document.getElementById("resetButton");
const cssOutput = document.getElementById("cssOutput");
const copyButton = document.getElementById("copyButton");

function updateFilters() {
  const brightnessValue = brightness.value;
  const contrastValue = contrast.value;
  const saturateValue = saturate.value;
  const grayscaleValue = grayscale.value;
  const sepiaValue = sepia.value;

  const filterStyle = `
    brightness(${brightnessValue}%)
    contrast(${contrastValue}%)
    saturate(${saturateValue}%)
    grayscale(${grayscaleValue}%)
    sepia(${sepiaValue}%)
  `;

  image.style.filter = filterStyle.trim();
  cssOutput.textContent = `filter: ${filterStyle.trim()};`;
}

function resetFilters() {
  brightness.value = 100;
  contrast.value = 100;
  saturate.value = 100;
  grayscale.value = 0;
  sepia.value = 0;
  updateFilters();
}

// Eventos para atualizar filtros em tempo real
brightness.addEventListener("input", updateFilters);
contrast.addEventListener("input", updateFilters);
saturate.addEventListener("input", updateFilters);
grayscale.addEventListener("input", updateFilters);
sepia.addEventListener("input", updateFilters);
resetButton.addEventListener("click", resetFilters);

// Copiar CSS
function copyCSS() {
  navigator.clipboard
    .writeText(cssOutput.textContent)
    .then(() => alert("CSS copiado com sucesso!"))
    .catch((err) => console.error("Erro ao copiar CSS:", err));
}

copyButton.addEventListener("click", copyCSS);

// Ativar link de navegação ativo com base no caminho
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".sidebar a");
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});
