//'use strict'
const main = document.querySelector('main');
const headerBlock = document.querySelector('header');
let startingPage = main.getElementsByClassName('starting-page');
const btnToUp = document.getElementById('btn-to-up');
const downArrow = document.getElementsByClassName('down-arrow');
const myDescription = document.getElementById('my-description');
const screenHeight = screen.height;
const windowHeight = screenHeight - 200;
let listBlocks = [];

window.onload = function () {
    menuListAdd();
    startingPage[0].style.height = windowHeight + 'px';
    let content = '<br><p>' + ageCalc() + '</p><h1>, г. Барнаул</h1>';
    myDescription.innerHTML += content;
    blockInformationAdd();

    for (let i = 0; i < downArrow.length; i++) {
        downArrow[i].style.top = screenHeight - 140 + i * windowHeight + 'px';
    }

    document.getElementById('avatar-mini').style.display = 'none';

    scrollingTo('window', 0);
}

window.onscroll = function () {
    if (pageYOffset > 80) {
        headerBlock.classList.add('header-fixed');
        document.getElementById('avatar-mini').style.display = 'block';
    }
    else {
        headerBlock.classList.remove('header-fixed');
        document.getElementById('avatar-mini').style.display = 'none';
    }

    if (pageYOffset > 400) {
        btnToUp.style.opacity = '1';
        btnToUp.style.cursor = 'pointer';
    }
    else {
        btnToUp.style.opacity = '0';
        btnToUp.style.cursor = 'auto';
    }

    if (pageYOffset > 600) {
        startingPage[0].id = 'unFocus-about-me';
    }
    else {
        if (startingPage[0].getAttribute('id'))
            startingPage[0].removeAttribute('id');
    }
};

const ageCalc = () => {
    let age = new Date('05.08.1994');
    let date = Math.floor((new Date() - age) / (1000 * 60 * 60 * 24 * 365)).toString();
    let split = date.split('');
    let end = parseInt(split[split.length - 1]);

    if (end === 1) {
        date += ' год';
    }
    else if (end > 1 && end < 5) {
        date += ' года';
    }
    else if (end > 4) {
        date += ' лет';
    }
    return date;
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li><a class="linkMenu" href="#' + item.id + '" onclick="scrollingTo(\'block\',\'' + item.id + '\')">' +
            item.description + '</a></li>';
    });
    headerBlock.innerHTML += `<ul> ${li} </ul>`;
}

const blockInformationAdd = () => { //проверить функцию, с ней проблемы

    let content;
    contentArr.forEach(block => {
        if (block.type === 'block') {
            content = '<span class="down-arrow" onclick="scrollingTo(\'block\',\'' + block.id + '\')"></span>' +
                '<div id="' + block.id + '" class="container" style="height:' + windowHeight + 'px">' +
                '<p>' + block.description + '</p>' +
                '<div class="qwe">';
            let arr = descriptionArr.filter(item => item.pattern === block.id);
            let contentDescription = '';
            arr.forEach(item => {
                contentDescription += '<div id="' + item.id + '" onclick="openBlock(\'' + item.id + '\')"' +
                    'style="background: url(\'source\/' + item.id + '.png\'); background-repeat: no-repeat; background-size: cover"></div>';
            });
            content += contentDescription + '</div>';
            main.innerHTML += content;
        }
    });
    startingPage = document.getElementsByClassName('starting-page');
}

const scrollingTo = (type, to) => {
    if (type == 'block') {
        document.getElementById(to).scrollIntoView({
            block: 'start',
            behavior: 'instant'
        });
    }
    else if (type == 'window') {
        window.scrollTo({
            top: to,
            behavior: "smooth"
        });
    }
}

const openBlock = (id) => {
    let block = listBlocks.find(item => item.id === id);
    if (block === undefined) {
        block = {};
        block.id = id;
        block.element = event.target.parentElement;
        listBlocks.push(block);
    }

    const qwe = block.element;
    const arr = qwe.querySelectorAll('div');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== id) {
            if (!block.isOpen)
                arr[i].classList.add('hidden');
            else
                arr[i].classList.remove('hidden');
        }
    }

    if (!block.isOpen) {
        qwe.classList.add('qwe-visible');
        createDescriptionBlock(qwe, id);
    }
    else {
        qwe.classList.remove('qwe-visible');
        removeDescriptionBlock(qwe, id);
    }
    block.isOpen = !block.isOpen;
}

const createDescriptionBlock = (parent, id) => {
    let div = document.createElement('div');
    div.className = 'blockDescription';
    let p = document.createElement('p');
    p.innerHTML = descriptionArr.find(item => item.id === id).description;
    div.appendChild(p);
    parent.appendChild(div);
}

const removeDescriptionBlock = (parent, id) => {
    let div = parent.getElementsByClassName('blockDescription');
    parent.removeChild(div[0]);
}