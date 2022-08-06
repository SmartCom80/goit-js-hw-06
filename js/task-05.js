// 1. Объявляем переменные для элементов.

const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

//  2. Функция замены имени пользователя, в соответствии со строкой в поле ввода.

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    return (nameOutputRef.textContent = "Anonymous");
  }
  return (nameOutputRef.textContent = event.currentTarget.value);
}

// 3. Добавляем слушатель на поле ввода и вызываем коллбэк-функцию.
nameInputRef.addEventListener("input", onInputChange);
