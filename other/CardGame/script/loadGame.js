const body = document.querySelector('body');
const module = document.getElementById('module');
const loginModule = document.getElementById('loginModule');
const loginForm = document.getElementById('loginForm');
const loginUser = document.getElementById('loginUser');
const passUser = document.getElementById('passUser');
const menuGame = document.getElementById('menuGame');
const mainBlock = document.getElementById('mainBlock');
const tableGame = document.getElementById('tableBlock');
const inputCount = document.getElementById('placeSize');
const arrCheck = document.getElementsByName('checkBox');
const settingsDiv = document.getElementById('settings');
const endGame = document.getElementById('endGame');
const msg = document.getElementById('message');
const scoreInput = document.getElementById('scoreInput');
const avatar = document.getElementById('avatar');

const loginFormInputs = loginForm.querySelectorAll('input');

body.onload = () => {
    loginForm.style.top = 'calc(50% - ' + loginForm.clientHeight / 2 + 'px)';
    loginForm.style.left = 'calc(50% - ' + loginForm.clientWidth / 2 + 'px)';
    avatar.style.top = '-10px';
}

succefulLogin = () => {
    loginModule.style.display = 'none';
    loginForm.style.display = 'none';
}

logIn = () => {
    if (loginUser.value == 'user')
        if (passUser.value == 'user') {
            var xmlhttp = getXmlHttp();
            xmlhttp.open('GET', 'resources/login/loginUser.txt', false);
            xmlhttp.send(null);
            if (xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                alert(response);
            }
            succefulLogin();
        }
        else
            alert('неверный пароль');
    else
        alert('неверно имя пользователя');
}

logInUser = () => {

}

logOutUser = () => {

}

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
