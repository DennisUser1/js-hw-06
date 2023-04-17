const focusInput = document.querySelector('#validation-input');
console.log(focusInput)
focusInput.addEventListener("blur", (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue.length === 6) {
        focusInput.classList.add('valid');
        focusInput.classList.remove('invalid');

    } else if(inputValue.length === 0){
        focusInput.classList.remove('invalid');
        focusInput.classList.remove('valid');
    } else {
        focusInput.classList.add('invalid');
        focusInput.classList.remove('valid');
    }
    });


// Метод другий 

// const focusInput = document.querySelector('#validation-input');
// console.log(focusInput)
// focusInput.addEventListener("blur", (event) => {
//     if(event.currentTarget.value.length === 6){
//         focusInput.classList.add('valid');
//         focusInput.classList.remove('invalid');

//     } else if(event.currentTarget.value.length === 0){
//         focusInput.classList.remove('invalid');
//         focusInput.classList.remove('valid');
//     } else {
//         focusInput.classList.add('invalid');
//         focusInput.classList.remove('valid');
//     }
//     });