const main = document.querySelector('main');
const wrapper = document.getElementById('wrapper');
let as;
let isColor = false;
let isOpenMenu = false;
let selectBlock, initialPoint, finalPoint;

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
        block.theme = i % 2; //выбор цветовой темы для блока 0 - черный, 1 - белый
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
    if (event.wheelDelta > 0)
        preScroll(-1);
    else if (event.wheelDelta < 0)
        preScroll(1);
}

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
            if (!isOpenMenu) {
                if (finalPoint.pageY > initialPoint.pageY)
                    preScroll(-1);
                else if (finalPoint.pageY < initialPoint.pageY)
                    preScroll(1);
            }
        }
    }
}

const scrollingTo = (to) => { //скорллинг до указанного места
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let finalBlock = blockArray.indexOf(blockArray.find(item => item.id === to));

    if (finalBlock !== selectBlock) {
        preScroll(finalBlock - selectBlock);
        if (isOpenMenu) //скрываем меню навигации
            openMenu();
    }
}

const preScroll = (countPoint) => {
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    scrollBlock(selectBlock, countPoint);
}

const scrollBlock = (startBlock, countBlock) => {
    //1 параметр начальная точка/текущий блок
    //2 параметр количество блоков
    let mainPosition = document.querySelector('main').offsetTop; //позиция главного блока

    if (mainPosition % window.innerHeight === 0) {
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

    }

}

const scrollEngine = (mainPosition, countBlock) => {
    main.style.top = mainPosition + (-countBlock) * window.innerHeight + 'px';
    bwTheme(blockArray[selectBlock].theme);
}

const bwTheme = (colorTheme) => {
    const reversColor = Math.abs(colorTheme - 1);
    as = document.getElementById('network-background');
    as.classList.add(bwColor[colorTheme]);
    as.classList.remove(bwColor[reversColor]);
    document.querySelector('body').style.backgroundColor = bwColor[colorTheme];
    let p = blockArray[selectBlock].block.querySelector('p');
    p.style.color = bwColor[reversColor];
}

const openMenu = () => {
    if (isOpenMenu)
        wrapper.classList.remove('open');
    else
        wrapper.classList.add('open');
    isOpenMenu = !isOpenMenu;
}

