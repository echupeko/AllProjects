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
const panelArr = [];
let isClicked = false;
let wDelta = 120;

window.onload = function () {
    contentDiv.style.height = document.body.clientHeight + 'px';
    contentArr.forEach(function (item) {
        let panel = {};
        panel.id = item.id;
        panel.description = item.description;
        panel.imgPath = "source/" + item.id + ".jpg";
        panel.div = addElementsCards(panel);
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

addElementsCards = (elementObj) => {
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
        if (!isClicked) {
            classRemover(item.div);
            descriptionDiv.style.width = '0';
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


