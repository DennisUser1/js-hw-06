//  1. Отримуємо посилання на список категорій ul#categories за допомогою методу document.querySelector()
//  2. Використовуємо метод querySelectorAll() на об'єкті categories, щоб отримати список елементів li.item.
//  3. Далі ми проходимося по кожному елементу li.item у списку за допомогою методу forEach(). Для кожного елементу ми отримуємо заголовок (h2) та кількість елементів li, що належать до цієї категорії, за допомогою методу querySelector() та querySelectorAll().


// Метод 1

// const categories = document.querySelector('#categories');
// const items = categories.querySelectorAll('.item');

// console.log(`Number of categories: ${items.length}`);

// items.forEach(item => {
//   const title = item.querySelector('h2').textContent;
//   const elements = item.querySelectorAll('li').length;
//   console.log(`Category: ${title}\nElements: ${elements}`);
// });
// \n - невидимий символ перевода строки

const elementList = document.querySelector('#categories');
const quantityСategories = elementList.children;
// elementList.children зберігає тільки дочірні вузли-елементи, що відповідають тегам
console.log(`Number of categories: ${quantityСategories.length}`);

[...quantityСategories].forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
})