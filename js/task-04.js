const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const valueWindow = document.querySelector('#value');
let counterValue = 0;
counterValue = +value.textContent;

const btnDownClick = () => {
    console.log('-1 click')
    counterValue -= 1;
    value.textContent = counterValue;
};

const btnUpClick = () => {
    console.log('+1 click')
    counterValue += 1;
    value.textContent = counterValue;
};


btnUp.addEventListener("click", btnUpClick);
btnDown.addEventListener("click", btnDownClick);



// Для отримання доступу до елементів HTML, було використано метод document.querySelector(), який знаходить перший елемент в документі, що відповідає заданому CSS-селектору.
// valueWindow - це спан, який відображає поточне значення лічильника.
// Далі була створена змінна counterValue, в якій зберігається поточне значення лічильника, яке початково встановлене на 0, і виведене на екран у спані valueWindow за допомогою властивості textContent.
// Після цього було створено дві функції, btnDownClick() та btnUpClick(), які викликаються при кліку на кнопки "decrement" і "increment" відповідно. Вони змінюють значення змінної counterValue на 1 відповідно до типу натиснутої кнопки, та відображають оновлене значення на сторінці у спані valueWindow за допомогою властивості textContent.
// Нарешті, були додані слухачі подій click на кнопки, які викликають відповідні функції при кліку на них. Тепер при кліку на кнопку лічильник збільшуватиметься або зменшуватиметься на 1, в залежності від типу кнопки, і оновлюватиметься на сторінці в спані valueWindow.