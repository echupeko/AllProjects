const main = document.querySelector('main');
const wrapper = document.getElementById('wrapper');
let as;
let isColor = false;
let isOpenMenu = false;
let selectBlock = 0;
let initialPoint;
let finalPoint;

const bwColor = ['black', 'white'];
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
        }
        else
            item.selected = false;
    }
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li id="' + item.id + '" onclick="scrollingTo(\'' + item.id + '\')">' +
            '<span></span><p>' + item.description + '</p></li>';
    });
    wrapper.innerHTML += `<ul> ${li} </ul>`;
}

const blockContentAdd = () => {
    const main = document.querySelector('main');
    let content = "";
    for (let i = 0; i < contentArr.length; i++) {
        content += '<div id="' + contentArr[i].id + '-block" class="content"><p>' + contentArr[i].description + '</p></div>';
        block = {};
        block.id = contentArr[i].id;
        block.theme = bwColor[i % 2]; //выбор цветовой темы для блока 0 - черный, 1 - белый
        blockArray.push(block);
    }
    main.innerHTML = content;
}

window.onmousemove = () => { //обработчик движения курсора, для эфекта глубины и динамичности фона
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270, 2);
    let x = Math.round((event.clientY - screen.height / 2) / 90, 2);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}

window.onmousewheel = () => { //обрабатываем события для колёсика мыши

    scrollBlock(event.wheelDelta, 0, 1);
}

window.onkeydown = () => { //обрабатываем нажатия кнопок
    let selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let countBlock = blockArray.length; //кол-во блоков всего
    if (event.code === 'PageUp') {
        scrollBlock(selectBlock, --selectBlock, 1); //скроллим вверх
    }
    else if (event.code === 'PageDown') {
        scrollBlock(selectBlock, ++selectBlock, 1); //скроллим вниз
    }
    else if (event.code === 'Home') {
        scrollBlock(countBlock - 1, 0, countBlock - selectBlock - 1); //скроллим в начало
    }
    else if (event.code === 'End') {
        scrollBlock(selectBlock, countBlock - 1, countBlock - selectBlock - 1); //скроллим в конец
    }
}

window.ontouchstart = () => { //сохраняем точку касания на смартфоне
    initialPoint = event.changedTouches[0];
}

window.ontouchend = () => { //смотрим направление движения пальца
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs < yAbs) {
            scrollBlock(finalPoint.pageY, initialPoint.pageY, 1);
        }
    }
}

const scrollingTo = (to) => { //скорллинг до указанного места
    let finalBlock = blockArray.indexOf(blockArray.find(item => item.id === to));
    scrollBlock(selectBlock, finalBlock, Math.abs(finalBlock - selectBlock)); //прокручиваем до выбранной позиции
    if (isOpenMenu) //скрываем меню навигации
        openMenu();
}

const scrollBlock = (startPoint, endPoint, countBlock) => {
    //1 параметр начальная точка/текущий блок
    //2 параметр конечная точка/выбранный блок
    if (startPoint !== endPoint) {
        let mainPosition = document.querySelector('main').offsetTop; //позиция главного блока
        let selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
        let index;

        if (selectBlock > countBlock)
            index = Math.abs(selectBlock - countBlock);
        else if (selectBlock < countBlock)
            index = Math.abs(selectBlock + countBlock);

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

        if (mainPosition % window.innerHeight === 0) {
            if (startPoint > endPoint) { //вверх
                if (mainPosition !== 0) { //если не вверху
                    selectBlock = selectBlock - countBlock;
                    scrollEngine(mainPosition, '+', countBlock);
                }
                else
                    return;
            }
            else { //вниз
                if (mainPosition !== -(contentArr.length - 1) * window.innerHeight) { //если не в конце
                    selectBlock = selectBlock + countBlock;
                    scrollEngine(mainPosition, '-', countBlock);
                }
                else
                    return;
            }
        }
    }
}

const scrollEngine = (mainPosition, operand, countBlockSkip) => {
    if (operand === '+')
        main.style.top = mainPosition + countBlockSkip * window.innerHeight + 'px';
    else if (operand === '-')
        main.style.top = mainPosition - countBlockSkip * window.innerHeight + 'px';
    for (let i = 0; i < countBlockSkip; i++) {
        bwTheme();
    }
}


const bwTheme = () => {
    as = document.getElementById('network-background');
    document.querySelector('body').style.backgroundColor = isColor ? '#1c1c1c' : 'white';
    as.classList.add(isColor ? 'black' : 'white');
    as.classList.remove(isColor ? 'white' : 'black');
    let li = document.querySelectorAll('li');
    let p = document.getElementById(contentArr[selectBlock].id + '-block').querySelector('p');
    if (!isColor) {
        document.getElementById('switch').classList.add('activate');
        for (let i = 0; i < contentArr.length; i++) {
            li[i].classList.add('activate');
        }
    }
    else {
        document.getElementById('switch').classList.remove('activate');
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('activate');
        }
    }
    p.style.color = isColor ? 'white' : 'black';
    isColor = !isColor;
}

const openMenu = () => {
    if (isOpenMenu)
        wrapper.classList.remove('open');
    else
        wrapper.classList.add('open');
    isOpenMenu = !isOpenMenu;
}

