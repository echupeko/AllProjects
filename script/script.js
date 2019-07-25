/*Добавить возможность открытия раздела
* выбранный раздел отображается слева при помощи добавления класса
* скроллинг при помощи ведения мыши
* */
const contentDiv = document.getElementById('content');
const descriptionDiv = document.getElementById('description')
const contentArr = [
    {id: 'skills', description: 'навыки'},
    {id: 'education', description: 'образование'},
    {id: 'development', description: 'работы'},
    {id: 'hobby', description: 'увлечения'},
    {id: 'contact', description: 'контакты'}];
const descriptionArr = [
    {id: 'javascript', pattern: 'skills', p: null},
    {id: 'html', pattern: 'skills', p: null},
    {id: 'css', pattern: 'skills', p: null},
    {id: '1C', pattern: 'skills', p: null},
    {id: 'asu2015', pattern: 'education', p: null},
    {id: 'asu2017', pattern: 'education', p: null},
    {id: 'cardgame', pattern: 'development', p: null},
    {id: 'psh', pattern: 'development', p: null},
    {id: 'constructor', pattern: 'development', p: null},
    {id: 'bicycle', pattern: 'hobby', p: null},
    {id: 'snowboard', pattern: 'hobby', p: null},
    {id: 'photoshop', pattern: 'hobby', p: null},
    {id: 'needlework', pattern: 'hobby', p: null},
    {id: 'adress', pattern: 'contact', p: null},
    {id: 'email', pattern: 'contact', p: null},
    {id: 'socialnetwork', pattern: 'contact', p: null},
]
const descriptionTextArr = [
    {id: 'javascript', skillLevel: 'Начинающий', description: 'Занимаюсь изучением JavaScript'},
    {id: 'html', skillLevel: 'Начинающий', description: 'Занимаюсь изучением HTML'},
    {id: 'css', skillLevel: 'Начинающий', description: 'Занимаюсь изучением CSS'},
    {id: '1C', skillLevel: 'Продвинутый', description: 'Работаю на 1С 7.7'},
    {id: 'asu2015', skillLevel: 'Бакалавр', description: 'В 2015 году получил степень бакалавра в ' +
        'Алтайском государственном университете'},
    {id: 'asu2017', skillLevel: 'Магистр', description: 'В 2017 получил степень магистра в ' +
        'Алтайском государственном университете с красным дипломом'},
    {id: 'cardgame', skillLevel: 'Начинающий', description: 'Игра на развитие зрительной памяти'},
    {id: 'psh', skillLevel: 'Начинающий', description: 'Сайт-галлерея, для демонстрации работ иллюстратора'},
    {id: 'constructor', skillLevel: 'Начинающий', description: 'Coming soon'},
    {id: 'bicycle', skillLevel: 'Опытный', description: 'Очень нравятся прогулки на велосипеде'},
    {id: 'snowboard', skillLevel: 'Начинающий', description: 'Увлекаюсь спусками с горы на сноуборде'},
    {id: 'photoshop', skillLevel: 'Начинающий', description: 'Занимаюсь изучением Adobe Photoshop, ' +
        'люблю создавать необычные работы'},
    {id: 'needlework', skillLevel: 'Начинающий', description: 'Работа с деревом и металлом успокаивает, ' +
        'а так же предоставляет возможность сделать что-то своими руками'},
    {id: 'adress', skillLevel: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
    {id: 'email', skillLevel: 'Начинающий', description: 'email: echupeko@gmail.com'},
    {id: 'socialnetwork', skillLevel: 'Начинающий', description: 'vk instagram whatsapp skype'}
]
const panelArr = [];
let isClicked = false;
let wDelta = 120;

window.onload = function () {
    contentArr.forEach(function (item) {
        let panel = {};
        panel.id = item.id;
        panel.description = item.description;
        panel.imgPath = "source/" + item.id + ".jpg";
        panel.div = addElementsCards('div:p,img,span',panel);
        panel.display = true;
        panelArr.push(panel);
    });



    // let html = document.documentElement;
    // if (html.attachEvent) {
    //     html.attachEvent("onmousewheel", scrollDoc); // IE and Opera
    // } else {
    //     html.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
    //     html.addEventListener("mousewheel", scrollDoc, false); // Chrome
    // }
}

addElementsPanel = (structure, elementObj) => {
    structure.split
    let divPanel = document.createElement('div');
    let imgBackground = document.createElement('img');
    let p = document.createElement('p');
    let span = document.createElement('span');

    divPanel.className = 'panel';
    divPanel.id = elementObj.id;
    divPanel.addEventListener("click", panelClick);
    p.innerText = elementObj.description;
    imgBackground.src = elementObj.imgPath;

    createElements(contentDiv, [divPanel]);
    createElements(divPanel, [p, imgBackground, span]);

    return divPanel;
}

createElements = (parent, elements) => { //созадние элемента
    for (let i = 0; i < elements.length; i++) {
        parent.appendChild(elements[i]);
    }
}

scrollDoc = (e) => {
    var __delta = e.wheelDelta || -e.detail;
    __delta /= Math.abs(__delta);
    document.documentElement.scrollLeft -= __delta * wDelta; // FF, Opera, IE
    if (this.attachEvent) return false;
    document.body.scrollLeft -= __delta * wDelta; // Chrome
}

panelClick = (event) => {
    isClicked = !isClicked;
    descriptionDiv.style.width = 'calc(100% - ' + (+event.target.parentElement.clientWidth + 108).toString() + 'px)';
    panelArr.forEach(function (item) {
        if (item.div !== event.target.parentElement)
            item.display = !item.display;
        else
            item.display = true;

        classMover(item.div, item.display);
        addElementsCards()
        descriptionDiv.style.display = 'block';

        if (!isClicked) {
            classRemover(item.div);
            descriptionDiv.style.display = 'none';
        }
    });

    document.documentElement.scrollLeft = 0;
    document.documentElement.removeEventListener("DOMMouseScroll", scrollDoc, false);
    document.documentElement.removeEventListener("mousewheel", scrollDoc, false);
}

classMover = (panel, display) => {
    let nameClass = panel.classList[0];
    let remove = display ? "-hide" : "-selection";
    let add = display ? "-selection" : "-hide";
    panel.classList.remove(nameClass + remove);
    panel.classList.add(nameClass + add);
}

classRemover = (panel) => {
    for (let i = 1; i < panel.classList.length; i++) {
        panel.classList.remove(panel.classList[i]);
    }
}


