
let as;
let isColor = false;
let selectBlock = 0;

window.onload = () => {
    menuListAdd();
    blockContentAdd();
    as = document.getElementById('network-background');
    as.style.height = 2 * screen.height + 'px';
    //document.querySelector('main').style.height = window.innerHeight + 'px';
}

window.onmousemove = () => {
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270, 2);
    let x = Math.round((event.clientY - screen.height / 2) / 90, 2);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}

window.onmousewheel = () => {
    let topMain = document.querySelector('main').offsetTop;
    if (topMain%window.innerHeight === 0) {


        if (event.wheelDelta > 0) { //вверх
            if (topMain === 0)
                return;
            else {
                document.querySelector('main').style.top = topMain + window.innerHeight + 'px';
                selectBlock--;
            }
        }
        else { //вниз
            if (topMain === -(contentArr.length - 1) * window.innerHeight)
                return;
            else {
                document.querySelector('main').style.top = topMain - window.innerHeight + 'px';
                selectBlock++;
            }
        }
        bwTheme();
    }

}

const menuListAdd = () => {
    const wrapper = document.getElementById('wrapper');
    let li = "";
    contentArr.forEach(item => {
        li += '<li id="' + item.id + '" onclick="scrollingTo(\'block\',\'' + item.id + '-block\')">' +
            '<p>' + item.description + '</p></li>';
    });
    wrapper.innerHTML += `<ul> ${li} </ul>`;
}

const blockContentAdd = () => {
    const main = document.querySelector('main');
    let content = "";
    contentArr.forEach(item => {
        content += '<div id="' + item.id + '-block" class="content"><p>' + item.description + '</p></div>';
    });
    main.innerHTML = content;
}

const scrollingTo = (type, to) => {
    if (type == 'block') {
        document.getElementById(to).scrollIntoView({
            block: 'start',
            behavior: 'instant'
        });
    }
    else if (type == 'window') {
        window.scrollTo({
            top: to,
            behavior: "smooth"
        });
    }
}

const bwTheme = () => {
    as = document.getElementById('network-background');
    document.querySelector('body').style.backgroundColor = isColor ? '#1c1c1c' : 'white';
    as.classList.add(isColor ? 'black' : 'white');
    as.classList.remove(isColor ? 'white' : 'black');
    if (!isColor) {
        document.getElementById('switch').classList.add('activate');
        let li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].classList.add('activate');
        }
    }
    else {
        document.getElementById('switch').classList.remove('activate');
        let li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('activate');
        }
    }
    isColor = !isColor;
}
