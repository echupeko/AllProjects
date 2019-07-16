let id = 1;
const img = document.getElementById('imgStack');
const imgBig = document.getElementById('imgBig');
const imgStack = img.querySelectorAll('#imgStack > div');
const span = imgBig.querySelector('span');

menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 550px)').matches) {
        if (id) {
            menu.classList.add('active');
            id--;
        }
        else {
            menu.classList.toggle('active');
            id++;
        }
    }
}

document.querySelector('body').onload = () => {


    for (let i = 0; i < 7; i++) {
        imgStack[i].style.backgroundImage = "url('source/image_stack/"+Math.floor(i+1)+".jpg')";
        // let img = document.createElement('img');
        // img.src = 'source/image_stack/' + Math.floor(i+1)+ '.jpg';
        // createElements(imgStack[i], img);
    }
}

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
}

img.onclick = (event) => {
    imgBig.classList.add('imageBig');
    imgBig.style.backgroundImage = event.target.style.backgroundImage;
    imgBig.style.left = 'calc(50% - ' + imgBig.clientWidth/2 + 'px)';
}

span.onclick = (event) => {
    imgBig.classList.toggle('imageBig');
}
