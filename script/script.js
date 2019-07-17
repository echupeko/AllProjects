let id = 1;
let imageChangedId = 0;
const img = document.getElementById('imgStack');
const imgBig = document.getElementById('imgBig');
const imgStack = img.querySelectorAll('#imgStack > div');
const span = imgBig.querySelector('span');
const div = imgBig.querySelectorAll('div');

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
    div.forEach(function (item) {
        item.addEventListener("click", changeImage)
    })
    for (let i = 0; i < 7; i++) {
        imgStack[i].style.backgroundImage = "url('source/image_stack/" + Math.floor(i + 1) + ".jpg')";
        imgStack[i].addEventListener("click", imageOnClick);
    }
}

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
}

imageOnClick = (event) => {
    imgBig.classList.add('imageBig');
    imgBig.style.backgroundImage = event.target.style.backgroundImage;
    imgBig.style.left = 'calc(50% - ' + imgBig.clientWidth / 2 + 'px)';
    loginModule.style.display = 'block';
}

loginModule.onclick = (event) => {
    imgBig.classList.toggle('imageBig');
    loginModule.style.display = 'none';
}

span.onclick = (event) => {
    imgBig.classList.toggle('imageBig');
    loginModule.style.display = 'none';
}

changeImage = (event) => {

    for (let i = 0; i < 7; i++) {
        if (imgStack[i].style.backgroundImage === imgBig.style.backgroundImage) {
           imageChangedId = i;
        }
    }
    if (event.target == div[1])
        if (imageChangedId+1 < imgStack.length) imgBig.style.backgroundImage = imgStack[imageChangedId+1].style.backgroundImage;
    if (event.target == div[0])
        if (imageChangedId-1 > -1) imgBig.style.backgroundImage = imgStack[imageChangedId-1].style.backgroundImage;
}