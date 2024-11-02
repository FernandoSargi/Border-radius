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
