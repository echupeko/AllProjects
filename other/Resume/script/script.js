const headerBlock = document.querySelector('header');
const aboutMe = document.getElementById('about-me');

window.onload = function () {
    const anchors = document.querySelectorAll('a[href*="#"]')
    let myDescription = document.getElementById('myDescription');

    myDescription.innerHTML += `<p>мне ${ageCalc()}</p>`;
    menuListAdd();

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
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
        navButton.style.opacity = '0.5';
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

const ageCalc = () => {
    let age = new Date('05.08.1994');
    let date = Math.floor((new Date() - age)/(1000*60*60*24*365)).toString();
    let split = date.split('');
    let end = parseInt(split[split.length-1]);
    if(end === 1){
        date += ' год';
    }
    else if (end > 1 && end < 5) {
        date += ' года';
    }
    else if (end > 4) {
        date += ' лет';
    }
    return date;
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li><a class="linkMenu" href="#' + item.id + '">' + item.description + '</a></li>';
        return li;
    });
    headerBlock.innerHTML = `<ul> ${li} </ul>`;
}

