function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const btn = document.querySelector('.change-color');
  
  const changeColor = () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  
    const spanText = document.querySelector('.color');
    spanText.textContent = randomColor;
  }
  
  btn.addEventListener('click', changeColor);