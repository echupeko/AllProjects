const headerBlock = document.querySelector('header');
const aboutMe = document.getElementById('about-me');

window.onload = function () {
    menuListAdd();
}

window.onscroll = function () {
    let navButton = document.getElementById('nav-btn');

    if (pageYOffset > 80) {
        headerBlock.classList.add('header-fixed');
    }
    else {
        headerBlock.classList.remove('header-fixed');
    }

    if(pageYOffset > 400) {
        navButton.style.opacity = '1';
    }
    else {
        navButton.style.opacity = '0';
    }

    if(pageYOffset > 600) {
        aboutMe.id = 'unFocus-about-me';
    }
    else {
        aboutMe.id = 'about-me';
    }
};

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li><a class="linkMenu" href="#' + item.id + '">' + item.description + '</a></li>';
        return li;
    });
    headerBlock.innerHTML = `<ul> ${li} </ul>`;
}

