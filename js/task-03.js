const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1. создаем функцию для разметки с помощью шаблонных строк.

const makeGalleryMarkup = (images) => {
  const { url, alt } = images;
  return `
<li class="gallery__item">
<img class="gallery__image" 
src="${url}" 
alt="${alt}"/>
 </li>`;
};

// 2. создаем функцию для каждого элемента массива .map с разделителем через .join для создания строки элементов для метода insertAdjacentHTML().

const makeGallery = images.map(makeGalleryMarkup).join(" ");

// 3. Получаем из HTML ссылку на коневой элемент Галереи.

const galleryRef = document.querySelector(".gallery");

// 4. Добавляем в код HTML, разметку для элементов галереи.

galleryRef.insertAdjacentHTML("afterbegin", makeGallery);
