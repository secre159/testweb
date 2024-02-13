const loginForm = document.querySelector('#login-form');


loginForm.addEventListener('submit', (event) => {

    event.preventDefault();


    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;


    if (username === 'user' && password === 'password') {

        window.location.href = 'home.html';
    } else {

        alert('Invalid username or password. Please try again.');
    }
});


const signupLink = document.querySelector('.sign');
signupLink.addEventListener('click', (event) => {

});

const forgotPasswordLink = document.querySelector('.forgot');
forgotPasswordLink.addEventListener('click', (event) => {});