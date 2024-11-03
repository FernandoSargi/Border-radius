const colorPicker1 = document.getElementById("color-picker1");
const colorPicker2 = document.getElementById("color-picker2");
const gradientSquare = document.getElementById("gradient-square");
const gradientType = document.getElementById("gradient-type");
const angleSlider = document.getElementById("angle-slider");
const angleValue = document.getElementById("angle-value");
const copyButton = document.getElementById("copy-gradient");

function updateGradient() {
  const color1 = colorPicker1.value;
  const color2 = colorPicker2.value;
  const angle = angleSlider.value;
  const type = gradientType.value;

  const gradient =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
      : `radial-gradient(circle, ${color1}, ${color2})`;

  gradientSquare.style.background = gradient;
}

colorPicker1.addEventListener("input", updateGradient);
colorPicker2.addEventListener("input", updateGradient);
gradientType.addEventListener("change", updateGradient);
angleSlider.addEventListener("input", () => {
  angleValue.textContent = `${angleSlider.value}°`;
  updateGradient();
});

copyButton.addEventListener("click", () => {
  const gradientCSS = `background: ${gradientSquare.style.background};`;
  navigator.clipboard.writeText(gradientCSS).then(() => {
    alert("CSS copiado!");
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
