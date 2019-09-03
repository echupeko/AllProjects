const headerBlock = document.querySelector('header');

window.onload = function () {
    menuListAdd();
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li>' + item.description + '</li>';
        return li;
    });
    headerBlock.innerHTML = `<ul> ${li} </ul>`;
}