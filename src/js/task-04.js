// 1. Создаем переменную counterValue для хранения текущего значения счетчика
let counterValue = 0;

// 2. Инициализируем переменные для элементов управления (кнопки и индикатор счетчика)

const btnIncrementRef = document.querySelector('[data-action="increment"]');

const btnDecrementRef = document.querySelector('[data-action="decrement"]');

const counterValueRef = document.querySelector("#value");

// 3. В колбек-функции обновляем текущее значение переменной counterValue и изменяем отображение значения счетчика на странице.
function onchangeCounter(event) {
  counterValue = Number(counterValueRef.textContent);

  event.target.dataset.action === "decrement"
    ? (counterValue -= 1)
    : (counterValue += 1);

  counterValueRef.textContent = counterValue;
}

// 4. Добавляем слушатели кликов на кнопках счетчика.

btnIncrementRef.addEventListener("click", onchangeCounter);
btnDecrementRef.addEventListener("click", onchangeCounter);
