const btnToUp = document.getElementById('btn-to-up');
const basketForm = document.getElementById('basketForm');
const header = document.querySelector('header');
let visibleMenu = 1;
let quantityGlobal = 0;
let amountGlobal = 0;
let clientHeight = window.innerHeight;
let orderItem = {
    id: 0,
    honey: 0,
    count: 0,
    inBasket: false
};
let basketOrder = [];

window.onload = function () {
    honeyList.forEach(item => {
        if (item.sale) {
            hotBlock.title = item.name;
            hotBlock.oldPrice = item.price;
            hotBlock.sale = item.salePrice;
            hotBlock.count = item.count;
            hotBlock.honey = item.id;
        }
    })
    document.getElementById('carouselExampleCaptions').style.marginTop = header.clientHeight + 'px';
}

window.onresize = function () {
    document.getElementById('carouselExampleCaptions').style.marginTop = header.clientHeight + 'px';
}

window.onscroll = function () {
    if (pageYOffset > 400) {
        btnToUp.style.opacity = '1';
        btnToUp.style.cursor = 'pointer';
    }
    else {
        btnToUp.style.opacity = '0';
        btnToUp.style.cursor = 'auto';
    }
}

let menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 1010px)').matches) {
        if (visibleMenu) {
            menu.classList.add('active');
            visibleMenu--;
        }
        else {
            menu.classList.toggle('active');
            visibleMenu++;
        }
    }
}

let addedOrder = (id) => {
    orderItem.id = basketOrder.length;
    orderItem.honey = id;
    orderItem.count = document.getElementById('honey' + id).value;
    orderItem.inBasket = !orderItem.inBasket;
    basketOrder.push(orderItem);
}

let updateTopHeader = () => {
    basketForm.style.top = header.clientHeight + 'px';
}