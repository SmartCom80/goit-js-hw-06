// 1. Объявляем переменные для элементов.

const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

// 2. Добавляем слушатель на поле ввода.

nameInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameOutputRef.textContent = "Anonymous";
  } else nameOutputRef.textContent = event.currentTarget.value;
});
