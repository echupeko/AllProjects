const main = document.querySelector('main');
const wrapper = document.getElementById('wrapper');
const nav = document.getElementById('navig');
//const cl = document.getElementById('clicked');
//let clock;
let as;
let isOpenMenu = false;
let selectBlock, initialPoint, finalPoint;
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
        if (i === 0) {
            item.selected = true;
            item.list.querySelector('span').classList.add('selected'); //указываем начальный элемент текущим
            selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
        }
        else
            item.selected = false;
    }
    bwTheme(0);
    //document.body.requestFullScreen();
};

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
    main.style.height = contentArr.length * 100 + 'vh';
    let content = "";
    for (let i = 0; i < contentArr.length; i++) {
        let item = contentArr[i];
        let age = new Date('05.08.1994');
        content += '<div id="' + item.id + '-block" class="content flex-block ' + ((i % 2) ? 'black-text' : 'white-text') + '" style="height: 100vh"><p class="title-page">' +
            item.title + '</p>' +
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
    main.innerHTML = content;
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
        htmlElement += '<li><p style="background-color:' + item.backgroundColor + '; color: ' + // name="' + item.id + '"
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

window.onmousewheel = () => { //обрабатываем события для колёсика мыши
    if (event.wheelDelta > 0)
        preScroll(-1);
    else if (event.wheelDelta < 0)
        preScroll(1);
};

window.onkeydown = () => { //обрабатываем нажатия кнопок
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let countBlock = blockArray.length; //кол-во блоков всего
    if (event.code === 'PageUp') {
        //scrollBlock(selectBlock, --selectBlock, 1); //скроллим вверх
        preScroll(-1);
    }
    else if (event.code === 'PageDown') {
        //scrollBlock(selectBlock, ++selectBlock, 1); //скроллим вниз
        preScroll(1);
    }
    else if (event.code === 'Home') {
        //scrollBlock(countBlock - 1, 0, countBlock - 1); //скроллим в начало
        preScroll(0 - selectBlock);
    }
    else if (event.code === 'End') {
        //scrollBlock(selectBlock, countBlock - 1, countBlock - selectBlock - 1); //скроллим в конец
        preScroll(countBlock - selectBlock - 1);
    }
};

main.ontouchstart = () => { //сохраняем точку касания на смартфоне
    initialPoint = event.changedTouches[0];
};

main.ontouchend = () => { //смотрим направление движения пальца
    finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs < yAbs) {
            if (!isOpenMenu) {
                if (finalPoint.pageY > initialPoint.pageY) {
                    alert('up');
                    preScroll(-1);
                }
                else if (finalPoint.pageY < initialPoint.pageY) {
                    alert('down');
                    preScroll(1);
                }
            }
        }
        else {
            if (finalPoint.pageX > initialPoint.pageX) {
                alert('right');
                openMenu();
            }
            else {
                alert('left');
                openMenu();
            }
        }

    }
};

const scrollingTo = (to) => { //скорллинг до указанного места
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let finalBlock = blockArray.indexOf(blockArray.find(item => item.id === to));

    if (finalBlock !== selectBlock) {
        preScroll(finalBlock - selectBlock);
        if (isOpenMenu) //скрываем меню навигации
            openMenu();
    }
};

const preScroll = (countBlock) => {
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    scrollBlock(selectBlock, countBlock);
};

const scrollBlock = (startBlock, countBlock) => {
    //1 параметр начальная точка/текущий блок
    //2 параметр количество блоков
    let mainPosition = document.querySelector('main').offsetTop; //позиция главного блока
    let index;

    if (mainPosition % window.innerHeight === 0) {
        let timeNow = new Date().getTime();
        let quietPeriod = 500;

        if (timeNow - lastAnimation < quietPeriod) {
            return;
        }

        index = startBlock + countBlock;
        if (index >= 0 && index < blockArray.length) {
            for (let i = 0; i < blockArray.length; i++) {
                if ((index) === i) {
                    blockArray[i].selected = true; //делаем пометку
                    blockArray[i].list.querySelector('span').classList.add('selected');
                }
                else {
                    blockArray[i].selected = false; //остальные снимаем
                    blockArray[i].list.querySelector('span').classList.remove('selected');
                }
            }
            selectBlock = index;
        }


        if (countBlock < 0) { //вверх
            if (mainPosition !== 0) { //если не вверху
                scrollEngine(mainPosition, countBlock);
            }
            else
                return;
        }
        else if (countBlock > 0) { //вниз
            if (mainPosition !== -(contentArr.length - 1) * window.innerHeight) { //если не в конце
                scrollEngine(mainPosition, countBlock);
            }
            else
                return;
        }

        lastAnimation = timeNow;
    }

};

const scrollEngine = (mainPosition, countBlock) => {
    main.style.top = mainPosition + (-countBlock) * window.innerHeight + 'px';
    bwTheme(blockArray[selectBlock].theme);
    console.log('scrolled ' + ((countBlock>0) ? 'down' : 'up'));
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

