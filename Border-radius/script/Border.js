document.addEventListener("DOMContentLoaded", function () {
  const borderStyleSelect = document.getElementById("border-style");
  const borderWidthInput = document.getElementById("border-width");
  const borderColorInput = document.getElementById("border-color");
  const borderLine = document.getElementById("border-line");
  const cssBorderOutput = document.getElementById("cssBorderOutput");
  const copyBorderButton = document.getElementById("copyBorderButton");

  // Função que atualiza a borda e o CSS exibido
  function updateBorder() {
    const borderStyle = borderStyleSelect.value;
    const borderWidth = borderWidthInput.value;
    const borderColor = borderColorInput.value;

    // Atualiza a borda da pré-visualização
    borderLine.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;

    // Exibe o CSS gerado
    cssBorderOutput.textContent = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;
  }

  // Atualiza o valor da espessura da borda no controle e chama a função updateBorder
  borderWidthInput.addEventListener("input", function () {
    document.getElementById("border-width-value").textContent = this.value;
    updateBorder();
  });

  // Quando o estilo da borda for alterado, atualiza a pré-visualização
  borderStyleSelect.addEventListener("change", updateBorder);

  // Quando a cor da borda for alterada, atualiza a pré-visualização
  borderColorInput.addEventListener("input", updateBorder);

  // Lógica para copiar o CSS da borda para a área de transferência
  copyBorderButton.addEventListener("click", function () {
    navigator.clipboard
      .writeText(cssBorderOutput.textContent)
      .then(() => {
        alert("CSS da borda copiado para a área de transferência!");
      })
      .catch(() => {
        alert("Erro ao tentar copiar o CSS.");
      });
  });

  // Atualiza a borda inicialmente quando a página é carregada
  updateBorder();

  // Lógica de navegação - destaca o link ativo
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".sidebar a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

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

    // Atualiza a borda da pré-visualização
    borderLine.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
    borderLine.style.backgroundColor = "white"; // Garante que o fundo da borda seja branco

    // Exibe o CSS gerado
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

  // Inicializa a borda
  updateBorder();
});
