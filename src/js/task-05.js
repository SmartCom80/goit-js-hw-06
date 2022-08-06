// 1. Объявляем переменные для элементов.

const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

// 2. Добавляем слушатель на поле ввода и замену имени пользователя, в соответствии со строкой в поле ввода.ы

nameInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (nameOutputRef.textContent = "Anonymous");
  }
  return (nameOutputRef.textContent = event.currentTarget.value);
});
