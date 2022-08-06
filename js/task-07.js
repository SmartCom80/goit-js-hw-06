// 1. Объявляем переменные для элементов.

const inputRangeControl = document.querySelector("#font-size-control");

const inputFontSize = document.querySelector("#text");

// Объявляем функцию для изменения шрифта

function onChangeFontInput(event) {
  //   console.log("inputRangeControl :>> ", event.target.value);
  inputFontSize.style.fontSize = `${event.target.value}px`;
}

// 3. Объявляем слушатель события и передаем колбэк-функцию.

inputRangeControl.addEventListener("input", onChangeFontInput);
