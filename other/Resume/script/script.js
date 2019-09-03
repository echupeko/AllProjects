const headerBlock = document.querySelector('header');

window.onload = function () {
    menuListAdd();
}

window.onscroll = function () {
    let menuCoords = menuElem.offsetHeight + 100;

    if (menuCoords < pageYOffset) {
        navButtonElem.style.opacity = '1';
        navButtonElem.style.cursor = 'pointer';
    } else {
        navButtonElem.style.opacity = '0';
        navButtonElem.style.cursor = 'auto';
    }
};

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li><a class="linkMenu" href="">' + item.description + '</a></li>';
        return li;
    });
    headerBlock.innerHTML = `<ul> ${li} </ul>`;
}

