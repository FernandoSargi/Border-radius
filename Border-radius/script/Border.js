document.addEventListener("DOMContentLoaded", function () {
  const borderStyleSelect = document.getElementById("border-style");
  const borderWidthInput = document.getElementById("border-width");
  const borderColorInput = document.getElementById("border-color");
  const borderLine = document.getElementById("border-line");
  const cssBorderOutput = document.getElementById("cssBorderOutput");
  const copyBorderButton = document.getElementById("copyBorderButton");

  function updateBorder() {
    const borderStyle = borderStyleSelect.value;
    const borderWidth = borderWidthInput.value;
    const borderColor = borderColorInput.value;

    borderLine.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
    cssBorderOutput.textContent = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;
  }

  borderStyleSelect.addEventListener("change", updateBorder);
  borderWidthInput.addEventListener("input", function () {
    document.getElementById("border-width-value").textContent = this.value;
    updateBorder();
  });
  borderColorInput.addEventListener("input", updateBorder);

  copyBorderButton.addEventListener("click", function () {
    navigator.clipboard.writeText(cssBorderOutput.textContent).then(() => {
      alert("CSS da borda copiado para a área de transferência!");
    });
  });

  // Atualiza a borda inicialmente
  updateBorder();

  // Lógica de navegação
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".sidebar a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
