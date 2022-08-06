// 1. Добавляем переменную для поля ввода.

const inputFieldRef = document.querySelector("#validation-input");

// 2.  Установка слушателя на событие "blur", проверка условия, и установка класса на input.

inputFieldRef.addEventListener("blur", (event) => {
  const evt = event.currentTarget;

  if (evt.value.length === Number(evt.dataset.length)) {
    evt.classList.remove("invalid");
    evt.classList.add("valid");
  } else {
    evt.classList.remove("valid");
    evt.classList.add("invalid");
  }
});
