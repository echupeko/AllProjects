/*Добавить возможность открытия раздела
* выбранный раздел отображается слева при помощи добавления класса
* скроллинг при помощи ведения мыши
* */
const contentDiv = document.getElementById('content');
const contentArr = [
    {id: 'skills1', desription: 'навыки'},
    {id: 'education1', desription: 'образование'},
    {id: 'development1', desription: 'работы'},
    {id: 'hobby1', desription: 'увлечения'},
    {id: 'contact1', desription: 'контакты'}];
const panelArr = [];
let isClicked = false;
let wDelta = 120;

window.onload = function () {
    contentArr.forEach(function (item) {
        let panel = {};
        panel.id = item.id;
        panel.desription = item.desription;
        panel.imgPath = "source/" + item.id + ".jpg";
        panel.div = addElementsCards(panel);
        panelArr.push(panel);
    });

    for (let i = 0; i < panelList.length; i++) {
        panelList[i].addEventListener("click", panelClick);
    }
    let html = document.documentElement;
    if (html.attachEvent) {
        html.attachEvent("onmousewheel", scrollDoc); // IE and Opera
    } else {
        html.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
        html.addEventListener("mousewheel", scrollDoc, false); // Chrome
    }
}

addElementsCards = (elementObj) => {
    let divPanel = document.createElement('div');
    let imgBackground = document.createElement('img');
    let p = document.createElement('p');
    let span = document.createElement('span');

    divPanel.className = 'panel';
    divPanel.id = elementObj.id;
    divPanel.addEventListener("click", panelClick);
    p.innerText = elementObj.desription;
    imgBackground.src = elementObj.imgPath;

    createElements(contentDiv, divPanel);
    createElements(divPanel, p);
    createElements(divPanel, imgBackground);
    createElements(divPanel, span);

    return divPanel;
}

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
    console.log('Добавлен ' + element + ' класса ' + element.className + ' в элемент ' + parent + ' класса ' + parent.className)
}

scrollDoc = (e) => {
    var __delta = e.wheelDelta || -e.detail;
    __delta /= Math.abs(__delta);
    document.documentElement.scrollLeft -= __delta * wDelta; // FF, Opera, IE
    if (this.attachEvent) return false;
    document.body.scrollLeft -= __delta * wDelta; // Chrome
}

panelClick = (event) => {
    if (!isClicked) {
        document.getElementById('content-module').style.width = 'calc(100% - 400px)';
        let panels = event.target;
        panels.classList.remove('panel-hide');
        panels.classList.add('panel-selection');

        for (let i = 0; i < panelList.length; i++) {
            if (panelList[i].id !== panels.offsetParent.id) {
                panelList[i].classList.remove('panel-selection');
                panelList[i].classList.add('panel-hide');
            }
        }

        document.documentElement.scrollLeft = 0;
        document.documentElement.removeEventListener("DOMMouseScroll", scrollDoc, false);
        document.documentElement.removeEventListener("mousewheel", scrollDoc, false);
    }
    else {
        for (let i = 0; i < panelList.length; i++) {
            panelList[i].classList.remove('panel-selection');
            panelList[i].classList.remove('panel-hide');
        }
        document.getElementById('content-module').style.width = '0';
        document.documentElement.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
        document.documentElement.addEventListener("mousewheel", scrollDoc, false); // Chrome
    }
    isClicked = !isClicked
}



