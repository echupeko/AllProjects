'use strict'
const main = document.getElementById('main');
const headerBlock = document.querySelector('header');
const aboutMe = document.getElementById('about-me');
const navButton = document.getElementById('nav-btn');
const downArrow = document.getElementsByClassName('downArrow');
const myDescription = document.getElementById('myDescription');
const myPhoto = document.getElementById('myPhoto');
let isOpenBlock = false;

window.onload = function () {
    menuListAdd();
    aboutMe.style.height = screen.height - 200 + 'px';
    blockInformationAdd();


    for (let i = 0; i < downArrow.length; i++) {
        downArrow[i].style.top = screen.height - 140 + i * 500 + 'px';
    }

    document.getElementById('photoCompress').style.display = 'none';
    myDescription.innerHTML += `<br><p>${ageCalc()}</p><h1>, г. Барнаул</h1>`;
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
            '<div id="' + block.id + '" class="container">' +
            '<p>' + block.description + '</p>' +
            '<div class="qwe" name="' + block.id + '">';
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
    const qwe = document.getElementsByClassName('qwe');
    qwe.forEach(item => {
        const arr = qwe.querySelectorAll('div');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id !== id) {
                if (!isOpenBlock)
                    arr[i].classList.add('hidden');
                else
                    isOpenBlock & arr[i].classList.remove('hidden');
            }
        }
        if (!isOpenBlock)
            qwe.classList.add('qwe-visible');
        else
            qwe.classList.remove('qwe-visible');

        isOpenBlock = !isOpenBlock;
    })

}