function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");

const colorSpanRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorSpanRef.textContent = color;
});
