'use strict'
const main = document.getElementById('main');
const headerBlock = document.querySelector('header');
const aboutMe = document.getElementById('about-me');
const navButton = document.getElementById('nav-btn');
const downArrow = document.getElementsByClassName('downArrow');
const myDescription = document.getElementById('myDescription');
const myPhoto = document.getElementById('myPhoto');
const screenHeight = screen.height;
const windowHeight = screenHeight - 200;
let listBlocks = [];

window.onload = function () {
    menuListAdd();
    aboutMe.style.height = windowHeight + 'px';
    let content = '<br><p>' + ageCalc() + '</p><h1>, г. Барнаул</h1>';
    myDescription.innerHTML += content;
    blockInformationAdd();


    for (let i = 0; i < downArrow.length; i++) {
        downArrow[i].style.top = screenHeight - 140 + i * windowHeight + 'px';
    }

    document.getElementById('photoCompress').style.display = 'none';

    scrollingTo('window', 0);
}

window.onscroll = function () {
    if (pageYOffset > 80) {
        headerBlock.classList.add('header-fixed');
        document.getElementById('photoCompress').style.display = 'block';
        myPhoto.classList.add('myPhoto-fixed');
    }
    else {
        headerBlock.classList.remove('header-fixed');
        document.getElementById('photoCompress').style.display = 'none';
        myPhoto.classList.remove('myPhoto-fixed');
    }

    if (pageYOffset > 400) {
        navButton.style.opacity = '1';
        navButton.style.cursor = 'pointer';
    }
    else {
        navButton.style.opacity = '0';
        navButton.style.cursor = 'auto';
    }

    if (pageYOffset > 600) {
        aboutMe.id = 'unFocus-about-me';
    }
    else {
        aboutMe.id = 'about-me';
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

const blockInformationAdd = () => {
    let content;
    contentArr.forEach(block => {
        content = '<span class="downArrow" onclick="scrollingTo(\'block\',\'' + block.id + '\')"></span>' +
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
    });
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
    if (!block.isOpen)
        qwe.classList.add('qwe-visible');
    else
        qwe.classList.remove('qwe-visible');
    block.isOpen = !block.isOpen;
    ;
}