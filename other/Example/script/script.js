let as;
let isColor = false;
window.onload = () => {
    as = document.getElementById('network-background');
    as.style.height = 2 * screen.height + 'px';
}
window.onmousemove = () => {
    as = document.getElementById('network-background');
    let y = -Math.round((event.clientX - screen.width / 2) / 270, 2);
    let x = Math.round((event.clientY - screen.height / 2) / 90, 2);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}
window.onmousewheel = () => {
   bwTheme();

}

const bwTheme = () => {
    as = document.getElementById('network-background');
    document.querySelector('body').style.backgroundColor = isColor ? '#1c1c1c' : 'white';
    as.classList.add(isColor ? 'black' : 'white');
    as.classList.remove(isColor ? 'white' : 'black');
    if (!isColor) {
        document.getElementById('switch').classList.add('activate');
        let li = document.querySelectorAll('li');
        for (let i=0;i<li.length;i++){
            li[i].classList.add('activate');
        }
    }
    else {
        document.getElementById('switch').classList.remove('activate');
        let li = document.querySelectorAll('li');
        for (let i=0;i<li.length;i++){
            li[i].classList.remove('activate');
        }
    }


    isColor = !isColor;

}
