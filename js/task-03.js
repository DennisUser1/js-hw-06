const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Функція makeListImages приймає один елемент з масиву images і створює рядок розмітки з відповідними атрибутами для вставки зображення в елемент <li>.
// Метод map використовується для створення нового масиву з рядків розмітки, що містять зображення з масиву images. Далі ці рядки об'єднуються в один рядок за допомогою методу join.
// Знайдений елемент з класом .gallery вставляється в кінець створеної розмітки зображень за допомогою методу insertAdjacentHTML.
// Використовує шаблонні рядки та метод insertAdjacentHTML() для ефективної вставки елементів в DOM та мінімізації кількості операцій з DOM.

const makeListImages = (element) => {
    const { url, alt } = element;
    return `<li><img src=${url} alt=${alt} width="700"/></li>`;
  };
  
  const addImagesinString = images.map(makeListImages).join("");
  const listEl = document.querySelector(".gallery");
  listEl.insertAdjacentHTML("beforeend", addImagesinString);

// В даному випадку, beforeend вказує на те, що новий HTML-код буде доданий в кінець внутрішнього вмісту обраного елемента (.gallery).