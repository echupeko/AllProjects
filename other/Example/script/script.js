let main = document.querySelector('main');
const wrapper = document.getElementById('wrapper');
const nav = document.getElementById('navig');
//const cl = document.getElementById('clicked');
//let clock;
selectBlock = 0;
let as;
let isOpenMenu = false;
let initialPoint, finalPoint;
let lastAnimation = 0;

const bwColor = ['#1c1c1c', 'white'];
let block = {};
const blockArray = [];

window.onload = () => {
    menuListAdd(); //добавление меню навигации
    blockContentAdd(); //добавление блоков
    for (let i = 0; i < blockArray.length; i++) { //запись в массив блоков
        let item = blockArray[i];
        item.list = document.getElementById(item.id);
        item.block = document.getElementById(item.id + '-block');
        let a = item.block.querySelectorAll('a');
        if (a.length > 0) {
            a.forEach(link => {
                link.addEventListener('mouseover', hover)
            });
            a.forEach(link => {
                link.addEventListener('mouseout', hout)
            });
        }
        if (i === 0) {
            item.selected = true;
            item.list.querySelector('span').classList.add('selected'); //указываем начальный элемент текущим
            selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
        }
        else
            item.selected = false;
    }
    bwTheme(0);
};

const hover = () => {
    event.target.style.color = bwColor[blockArray[selectBlock].theme];
};

const hout = () => {
    event.target.style.color = "";
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li id="' + item.id + '" onclick="scrollingTo(\'' + item.id + '\')">' +
            '<span></span><p>' + item.title + '</p></li>';
    });
    wrapper.innerHTML += `<div class="flex-block"><ul class="list-menu"> ${li} </ul></div>`;
};

const blockContentAdd = () => {
    const main = document.querySelector('main');
    main.style.height = contentArr.length * window.innerHeight + 'px';
    let content = "";
    for (let i = 0; i < contentArr.length; i++) {
        let item = contentArr[i];
        let age = new Date('05.08.1994');
        content += '<div id="' + item.id + '-block" class="flex-block ' + ((i % 2) ? 'black-text' : 'white-text') +
            '" style="height: 100vh"><p class="title-page">' + item.title + '</p>' +
            '<div class="container ' + item.id + ' flex-block ">\n' +
            '<div class="header-block">' + item.description +
            '<p>' + ((i === 0) ? ageCalc(age) : '') + '</p></div>\n' +
            '<div class="photo" style="background-image: url(source/' + item.id + '.png);"></div>' +
            '<div class="description-block flex-block">' +
            '<div class="description flex-block">' + ((i === 0) ? '<p>навыки:</p>' : '') +
            contentDescriptionList(item.id) +
            '</div></div></div></div>';
        block = {};
        block.id = item.id;
        block.theme = i % 2; //выбор цветовой темы для блока 0 - черный, 1 - белый
        blockArray.push(block);
    }
    main.innerHTML += content;

};

const contentDescriptionList = (parrent) => {
    let descriptionBlock = descriptionArr.filter(item => item.parrent === parrent);
    let htmlElement = '<ul class="flex-block">';
    descriptionBlock.forEach(item => {
        let text = "";
        if (item.parrent === 'about')
            text = item.id;
        else
            text = item.description;
        htmlElement += '<li><p style="background-color:' + item.backgroundColor + '; color: ' +
            item.color + '">' + text + '</p></li>';
    });
    htmlElement += '</ul>';
    return htmlElement;
};

const ageCalc = (age) => {

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
};

// main.onmousedown = () => {
//     startTimer();
//
//     cl.style.top = event.clientY - 76 + 'px';
//     cl.style.left = event.clientX - 76 + 'px';
//     cl.style.display = 'block';
//     cl.style.transform = 'scale(1)';
// }
//
// window.onmouseup = () => {
//     if (clock>200) {
//         nav.style.top = event.clientY - 76 + 'px';
//         nav.style.left = event.clientX - 76 + 'px';
//         nav.style.display = 'flex';
//         cl.style.transform = 'scale(0)';
//         cl.style.display = 'none';
//     }
//     startTimer(true);
// }
//
// nav.onmouseleave = () => {
//     nav.style.display = 'none';
// }
//
// const startTimer = (end) => {
//     if (!end) {
//         clock = setTimeout("startTimer(end)", 1);
//     }
//     else {
//         clock = 0;
//
//     }
// }

window.onmousemove = () => { //обработчик движения курсора, для эфекта глубины и динамичности фона
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270);
    let x = Math.round((event.clientY - screen.height / 2) / 90);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
};

window.onresize = () => { //обработчик изменения размера окна
    main.style.height = contentArr.length * window.innerHeight + 'px';
    let mainPosition = document.querySelector('main').offsetTop; //позиция главного блока
    main.style.top = window.innerHeight * selectBlock + 'px';
    if (mainPosition < 0)
        main.style.top = -(window.innerHeight * selectBlock) + 'px';

}

const scrollingTo = (to) => {
    selectBlock = blockArray.indexOf(blockArray.find(item => item.id === to)); //текущий блок
    document.getElementById(to + '-block').scrollIntoView({
        block: 'start',
        behavior: 'instant'
    });
    bwTheme(blockArray[selectBlock].theme);
}
window.onmousewheel = () => { //обрабатываем события для колёсика мыши
    if (event.wheelDelta > 0)//скроллим вверх
        selectBlock--;
    else if (event.wheelDelta < 0)//скроллим вниз
        selectBlock++;
    scrollingTo(blockArray[selectBlock].id);
};

const bwTheme = (colorTheme) => {
    const reversColor = Math.abs(colorTheme - 1);
    as = document.getElementById('network-background');
    as.classList.add(bwColor[colorTheme]);
    as.classList.remove(bwColor[reversColor]);
    document.querySelector('body').style.backgroundColor = bwColor[colorTheme];
    //blockArray[selectBlock].block.style.color = bwColor[reversColor];
    //let p = blockArray[selectBlock].block.querySelector('p');
    //blockArray[selectBlock].block.getElementsByClassName('container')[0].style.color = bwColor[reversColor];
    //p.style.color = bwColor[reversColor];
};

const openMenu = () => {
    if (isOpenMenu)
        wrapper.classList.remove('open');
    else
        wrapper.classList.add('open');
    isOpenMenu = !isOpenMenu;
};

