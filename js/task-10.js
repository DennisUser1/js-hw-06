// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const divBoxesEl = document.getElementById('boxes')
// const inputEl = document.querySelector('input');


// createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)))

// function createBoxes(amount) {

//   if (!amount) {
//     return false;
//   }

//   const childElementCount = divBoxesEl.childElementCount;
//   const divGroup = [];

//   for (let i = childElementCount; i < amount + childElementCount; i += 1) {

//     let num = i * 10 + 30;
//     const divStr = `<div style="width: ${num}px; height: ${num}px; background-color: ${getRandomHexColor()};"></div>`
//     divGroup.push(divStr);

//   }
//   divBoxesEl.insertAdjacentHTML("beforeend", divGroup.join('\n'));
// }

// function destroyBoxes() {
//   divBoxesEl.innerHTML = '';

// }
// destroyBtn.addEventListener('click', destroyBoxes)

// Другий спосіб
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +document.querySelector('input').value;
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 

// За допомогою бібліотеки jQuery
// const $createBtn = $('[data-create]');
// const $destroyBtn = $('[data-destroy]');
// const $boxes = $('#boxes');

// $createBtn.on('click', createBoxes);
// $destroyBtn.on('click', destroyBoxes);

// function createBoxes() {
//   const amount = +$('input').val();
//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const $box = $('<div>');
//     $box.width(size).height(size).css('background-color', getRandomHexColor());
//     $boxes.append($box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   $boxes.empty();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

