const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

//  1. Знаходимо елемент <ul> з id="ingredients" за допомогою методу querySelector.
//  2. За допомогою методу map, ми проходимо по масиву інгредієнтів ingredients і створюємо новий масив <li> елементів з допомогою методу createElement.
//  3. Для кожного <li> (createElement) елемента, ми встановлюємо текстовий вміст з назвою інгредієнта, який беремо з масиву ingredients.
//  4. Ми додаємо клас "item" до кожного <li> елемента за допомогою методу classList.add.
//  5. Нарешті, ми вставляємо всі <li> елементи у <ul> елемент за допомогою методу append.

const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const createElement = document.createElement('li');
  createElement.textContent = ingredient;
  createElement.classList.add("item");
    return createElement;
  });
};

const listElements = createIngredientsList(ingredients);
listIngredients.append(...listElements);