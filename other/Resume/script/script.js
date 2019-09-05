'use strict'
const headerBlock = document.querySelector('header');
const aboutMe = document.getElementById('about-me');
const navButton = document.getElementById('nav-btn');
const downArrow = document.getElementsByClassName('downArrow');
const myDescription = document.getElementById('myDescription');
const myPhoto = document.getElementById('myPhoto');

window.onload = function () {
    menuListAdd();
    aboutMe.style.height = screen.height-200 + 'px';

    for (let i=0; i<downArrow.length; i++){
        downArrow[i].style.top = screen.height-140 + i*500 + 'px';
    }

    document.getElementById('photoCompress').style.display = 'none';
    myDescription.innerHTML += `<br><p>${ageCalc()}</p><h1>, г. Барнаул</h1>`;
    scrollingTo('window',0);
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

    if(pageYOffset > 400) {
        navButton.style.opacity = '0.5';
        navButton.style.display = 'block';
    }
    else {
        navButton.style.display = 'none';
        navButton.style.opacity = '0';

    }

    if(pageYOffset > 600) {
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
        li += '<li><a class="linkMenu" href="#' + item.id + '" onclick="scrollingTo(\'block\',\'' + item.id + '\')">' + item.description + '</a></li>';
    });
    headerBlock.innerHTML += `<ul> ${li} </ul>`;
}

const scrollingTo = (type, to) => {
    if (type == 'block'){
        document.getElementById(to).scrollIntoView({
            behavior: 'instant',
            block: 'start'
        });
    }
    else if (type == 'window') {
        window.scrollTo({
            top: to,
            behavior: "smooth"
        });
    }
}