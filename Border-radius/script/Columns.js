const columnCountInput = document.getElementById("column-count");
const columnGapInput = document.getElementById("column-gap");
const columnWidthInput = document.getElementById("column-width");
const textPreview = document.getElementById("text-preview");

const columnCountDisplay = document.getElementById("column-count-display");
const columnGapDisplay = document.getElementById("column-gap-display");
const columnWidthDisplay = document.getElementById("column-width-display");
const resetButton = document.getElementById("reset-button");

function updateColumns() {
  const columnCount = columnCountInput.value;
  const columnGap = columnGapInput.value;
  const columnWidth = columnWidthInput.value;

  textPreview.style.columnCount = columnCount;
  textPreview.style.columnGap = `${columnGap}px`;
  textPreview.style.columnWidth = `${columnWidth}px`;

  columnCountDisplay.textContent = columnCount;
  columnGapDisplay.textContent = `${columnGap}px`;
  columnWidthDisplay.textContent = `${columnWidth}px`;
}

function resetSettings() {
  columnCountInput.value = 2;
  columnGapInput.value = 20;
  columnWidthInput.value = 200;

  updateColumns();
}

columnCountInput.addEventListener("input", updateColumns);
columnGapInput.addEventListener("input", updateColumns);
columnWidthInput.addEventListener("input", updateColumns);
resetButton.addEventListener("click", resetSettings);

updateColumns();

const copyColumnsCssButton = document.getElementById("copy-columns-css");

copyColumnsCssButton.addEventListener("click", function () {
  const columnCount = columnCountInput.value;
  const columnGap = columnGapInput.value;
  const columnWidth = columnWidthInput.value;

  const cssText = `column-count: ${columnCount};\ncolumn-gap: ${columnGap}px;\ncolumn-width: ${columnWidth}px;`;

  navigator.clipboard.writeText(cssText).then(() => {
    alert("CSS das colunas copiado para a área de transferência!");
  });
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

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".sidebar a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
