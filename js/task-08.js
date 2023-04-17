const form = document.querySelector('.login-form');

function onFormSubmit(event){
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        return alert('Всі поля повинні бути заповненні')
    } else {
        const formData = {
            email,
            password,
        };
        console.log(formData)
    };
}

form.addEventListener('submit', onFormSubmit);