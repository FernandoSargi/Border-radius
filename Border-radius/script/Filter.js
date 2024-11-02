const image = document.getElementById("image");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const saturate = document.getElementById("saturate");
const grayscale = document.getElementById("grayscale");
const sepia = document.getElementById("sepia");
const resetButton = document.getElementById("resetButton");

function updateFilters() {
  const brightnessValue = brightness.value;
  const contrastValue = contrast.value;
  const saturateValue = saturate.value;
  const grayscaleValue = grayscale.value;
  const sepiaValue = sepia.value;

  image.style.filter = `
        brightness(${brightnessValue}%)
        contrast(${contrastValue}%)
        saturate(${saturateValue}%)
        grayscale(${grayscaleValue}%)
        sepia(${sepiaValue}%)
    `;
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
