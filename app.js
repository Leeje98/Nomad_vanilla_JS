const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const greeting = document.querySelector('#greeting')



function onLoginSubmit(event) {
    event.preventDefault();  
    const username = loginInput.value;
    loginForm.classList.add('hidden')
    console.log(username)
    greeting.innerText = 'Hello' + username;
}


loginForm.addEventListener('submit', onLoginSubmit)
