/*Добавить возможность открытия раздела
* выбранный раздел отображается слева при помощи добавления класса
* скроллинг при помощи ведения мыши
* */

const panelArr = [];
const panel = {
    id: null,
    description: "",
    imgPath: "",
};
const panelList = document.getElementsByClassName('panel');
let isClicked = false;
let wDelta = 120;

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

window.onload = function () {
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