const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Создаем функцию для разметки.
const makeMarkup = (ingredients) => {
  return ingredients.map((ingredient) => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    return element;
  });
};

// 2. Вызываем функцию создания разметки для каждого элемента массива ингридиентов
const elements = makeMarkup(ingredients);

// 3. Получаем из HTML ссылку на список ингридиентов.
const listRef = document.querySelector("#ingredients");

// 4. Записываем в DOM разметку списка ингридиентов.
listRef.append(...elements);
