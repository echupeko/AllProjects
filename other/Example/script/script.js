const wrapper = document.getElementById('wrapper');
const nav = document.getElementById('navig');
const main = document.querySelector('main');

let initialPoint, finalPoint, lastAnimation = 0, isOpenMenu = false;
let changeColorTheme = sessionStorage.getItem('colorTheme'); //id цвета темы из массива bwColor
let selectBlock = sessionStorage.getItem('selectBlock'); //id выбранного объекта

const bwColor = ['#1c1c1c', 'white'];
const blockArray = [];
let block = {};

window.onload = () => {
    menuListAdd(); //добавление меню навигации
    blockContentAdd(); //добавление блоков

    for (let i = 0; i < blockArray.length; i++) { //запись в массив блоков
        block = blockArray[i];
        block.list = document.getElementById(block.id); //ячейка в меню навигации
        block.block = document.getElementById(block.id + '-block'); //блок данных

        let a = block.block.querySelectorAll('a'); //список всех ссылок в блоке данных
        if (a.length > 0) {
            a.forEach(link => {
                link.addEventListener('mouseover', linkMouseMove);
                link.addEventListener('mouseout', unlinkMouseMove);
                /*при наведении на ссылки они должны менять цвет на отличный от темы блока*/
            });
        }

        if (i === parseInt(selectBlock))
            block.selected = true;
        else
            block.selected = false;

        if (!selectBlock) {
            selectBlock = 0;
        }
    }
    // bwTheme(parseInt(changeColorTheme));
    // selectedBlock(parseInt(selectBlock));
    scrollingTo(blockArray[selectBlock].id);
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
    main.style.height = contentArr.length * 100 + 'vh';
    let content = "";
    for (let i = 0; i < contentArr.length; i++) {
        let item = contentArr[i];
        const age = new Date('05.08.1994');
        content +=
            '<div id="' + item.id + '-block" class="flex-block ' + ((i % 2) ? 'black-text' : 'white-text') +
            '" style="height: 100vh">' +
            '   <p class="title-page">' + item.title + '</p>' +
            '   <div class="container ' + item.id + ' flex-block ">\n' +
            '       <div class="header-block">' + item.description +
            '           <p>' + ((i === 0) ? ageCalc(age) : '') + '</p>' +
            '       </div>\n' +
            '       <div class="photo" style="background-image: url(source/' + item.id + '.png);"></div>' +
            '       <div class="description-block flex-block">' +
            '           <div class="description flex-block">' + ((i === 0) ? '<p>навыки:</p>' : '') +
                            contentDescriptionList(item.id) +
            '          </div>' +
            '       </div>' +
            '   </div>' +
            '</div>';
        block = {};
        block.id = item.id;
        block.theme = i % 2; //выбор цветовой темы для блока 0 - черный, 1 - белый
        blockArray.push(block);
    }
    main.innerHTML += content;
};

const ageCalc = (age) => {
    let date = Math.floor((new Date() - age) / (1000 * 60 * 60 * 24 * 365)).toString();
    /*           количество милисекунд в году:  мсек  сек  мин  часы  дни */
    const split = date.split('');
    const end = parseInt(split[split.length - 1]);

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

const contentDescriptionList = (parrent) => {
    const descriptionBlock = descriptionArr.filter(item => item.parrent === parrent);
    let htmlElement = '<ul class="flex-block">';
    descriptionBlock.forEach(item => {

        let text;
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

const linkMouseMove = () => { //
    event.target.style.color = bwColor[blockArray[selectBlock].theme];
};

const unlinkMouseMove = () => { //
    event.target.style.color = '';
}

window.onmousemove = () => { //обработчик движения курсора, для эфекта глубины и динамичности фона
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270);
    let x = Math.round((event.clientY - screen.height / 2) / 90);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
};

window.onresize = () => { //обработчик изменения размера окна
    //document.querySelector('body').style.height = contentArr.length * window.innerHeight + 'px';
     //main.innerHeight = contentArr.length * window.innerHeight + 'px';
     scrollingTo(blockArray[selectBlock].id);
}

const scrollingTo = (to) => {
    selectBlock = blockArray.indexOf(blockArray.find(item => item.id === to)); //текущий блок
    document.getElementById(to + '-block').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
    selectedBlock(selectBlock);
    bwTheme(blockArray[selectBlock].theme);
}

window.onmousewheel = () => { //обрабатываем события для колёсика мыши
    let timeNow = new Date().getTime();
    let quietPeriod = 500;

    if (timeNow - lastAnimation < quietPeriod)
        return;

    if (event.wheelDelta > 0 && selectBlock > 0)//скроллим вверх
        selectBlock--;
    else if (event.wheelDelta < 0 && selectBlock < blockArray.length - 1)//скроллим вниз
        selectBlock++;

    scrollingTo(blockArray[selectBlock].id);
    lastAnimation = timeNow;
};

window.onkeydown = () => { //обрабатываем нажатия кнопок
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let countBlock = blockArray.length; //кол-во блоков всего
    if (event.code === 'PageUp') {
        selectBlock--;
    }
    else if (event.code === 'PageDown') {
        selectBlock++;
    }
    else if (event.code === 'Home') {
        selectBlock = 0;
    }
    else if (event.code === 'End') {
        selectBlock = countBlock - 1;
    }
    scrollingTo(blockArray[selectBlock].id);
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
                    if (selectBlock > 0)
                        selectBlock--;
                    else
                        location.reload();

                }
                else if (finalPoint.pageY < initialPoint.pageY) {
                    selectBlock++;
                }
                scrollingTo(blockArray[selectBlock].id);
            }
        }
        else {
            if (finalPoint.pageX > initialPoint.pageX || finalPoint.pageX < initialPoint.pageX) {
                openMenu();
            }
        }
    }
};

const selectedBlock = (index) => {
    for (let i = 0; i < blockArray.length; i++) {
        if ((index) === i) {
            blockArray[i].selected = true; //делаем пометку
            blockArray[i].list.querySelector('span').classList.add('selected');
            sessionStorage.setItem('selectBlock', index);
        }
        else {
            blockArray[i].selected = false; //остальные снимаем
            blockArray[i].list.querySelector('span').classList.remove('selected');
        }
    }
}

const bwTheme = (colorTheme) => {
    changeColorTheme = colorTheme;
    sessionStorage.setItem('colorTheme', changeColorTheme);
    const reversColor = Math.abs(colorTheme - 1);
    const background = document.getElementById('network-background');
    background.classList.add(bwColor[colorTheme]);
    background.classList.remove(bwColor[reversColor]);
    document.querySelector('body').style.backgroundColor = bwColor[colorTheme];
};

const openMenu = () => {
    if (isOpenMenu)
        wrapper.classList.remove('open');
    else
        wrapper.classList.add('open');
    isOpenMenu = !isOpenMenu;
};

