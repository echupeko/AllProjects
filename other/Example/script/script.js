const main = document.querySelector('main');
const wrapper = document.getElementById('wrapper');
let as;
let isColor = false;
let isOpenMenu = false;
let selectBlock = 0;
let initialPoint;
let finalPoint;

window.onload = () => {
    menuListAdd();
    blockContentAdd();
    as = document.getElementById('network-background');
    as.style.height = 2 * screen.height + 'px';
    document.getElementById(contentArr[0].id).querySelector('span').classList.add('selected');
    wrapper.querySelector('span').addEventListener('click',openMenu);

}

window.onmousemove = () => {
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270, 2);
    let x = Math.round((event.clientY - screen.height / 2) / 90, 2);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}

window.onmousewheel = () => {
    scrollBlock(event.wheelDelta, 0, 1);
}

const scrollBlock = (startPoint, endPoint, countBlock) => {
    let mainPosition = document.querySelector('main').offsetTop;
    if (mainPosition % window.innerHeight === 0) {
        if (startPoint > endPoint) { //вверх
            if (mainPosition !== 0) {
                selectBlock = selectBlock - countBlock;
                scrollEngine(mainPosition, '+', countBlock);
            }
            else
                return;
        }
        else { //вниз
            if (mainPosition !== -(contentArr.length - 1) * window.innerHeight) {
                selectBlock = selectBlock + countBlock;
                scrollEngine(mainPosition, '-', countBlock);
            }
            else
                return;
        }

        contentArr.forEach(item => {
            if (contentArr[selectBlock].id === item.id)
                document.getElementById(item.id).querySelector('span').classList.add('selected');
            else
                document.getElementById(item.id).querySelector('span').classList.remove('selected');
        })

    }
}

const scrollEngine = (mainPosition, operand, countBlockSkip) => {
    if (operand === '+')
        main.style.top = mainPosition + countBlockSkip * window.innerHeight + 'px';
    else if (operand === '-')
        main.style.top = mainPosition - countBlockSkip * window.innerHeight + 'px';
    for (let i = 0; i< countBlockSkip; i++) {
        bwTheme();
    }
}

const menuListAdd = () => {
    let li = "";
    contentArr.forEach(item => {
        li += '<li id="' + item.id + '" onclick="scrollingTo(\'block\',\'' + item.id +'\')">' +
            '<span></span><p>' + item.description + '</p></li>';
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

const openMenu = () => {
    if (isOpenMenu)
        wrapper.classList.remove('open');
    else
        wrapper.classList.add('open');
    isOpenMenu = !isOpenMenu;
}

const scrollingTo = (type, to) => {
    if (type == 'block') {
        let finalBlock = contentArr.indexOf(contentArr.find(item => item.id === to));
        scrollBlock(selectBlock,finalBlock,Math.abs(finalBlock - selectBlock));
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
    let li = document.querySelectorAll('li');
    let p = document.getElementById(contentArr[selectBlock].id+'-block').querySelector('p');
    if (!isColor) {
        document.getElementById('switch').classList.add('activate');
        for (let i = 0; i < contentArr.length; i++) {
            li[i].classList.add('activate');
        }
    }
    else {
        document.getElementById('switch').classList.remove('activate');
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('activate');
        }
    }
    p.style.color = isColor ? 'white' : 'black';
    isColor = !isColor;
}

window.addEventListener('touchstart', function (event) {
    initialPoint = event.changedTouches[0];
}, false);

window.addEventListener('touchend', function (event) {
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs < yAbs) {
            scrollBlock(finalPoint.pageY, initialPoint.pageY, 1);
        }
    }
}, false);