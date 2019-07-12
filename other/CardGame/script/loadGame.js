const body = document.querySelector('body');
const loginForm = document.getElementById('loginForm');
const menuGame = document.getElementById('menuGame');
const mainBlock = document.getElementById('mainBlock');
const tableGame = document.getElementById('tableBlock');
const inputCount = document.getElementById('placeSize');
const arrCheck = document.getElementsByName('checkBox');
const settingsDiv = document.getElementById('settings');
const endGame = document.getElementById('endGame');
const msg = document.getElementById('message');
const scoreInput = document.getElementById('scoreInput');

const loginFormInputs = loginForm.querySelectorAll('input');

body.onload = () => {
    loginForm.style.top = 'calc(50% - '+loginForm.clientHeight/2+'px)';
    loginForm.style.left = 'calc(50% - '+loginForm.clientWidth/2+'px)';
}

loginFormInputs.onclick = () => {
    loginFormInputs.forEach(function (input) {
        if(input.id === "")
    })
    if (log)
}

