let visibleMenu = 1;
const btnToUp = document.getElementById('btn-to-up');
let orderItem = {
    id: 0,
    honey: 0,
    count: 0,
    inBasket: false
};
let basketOrder = [];

window.onload = function () {
    honeyList.forEach(item => {
        if(item.sale) {
            hotBlock.title = item.name;
            hotBlock.oldPrice = item.price;
            hotBlock.sale = item.salePrice;
            hotBlock.count = item.count;
            hotBlock.honey = item.id;
        }
    })
    document.getElementById('carouselExampleCaptions').style.marginTop = document.querySelector('header').clientHeight + 'px';
    document.getElementById('basketForm').style.display = 'none';
    document.getElementById('basketForm').style.minHeight = clientHeight - 72 + 'px';
}

window.onresize = function () {
    document.getElementById('carouselExampleCaptions').style.marginTop = document.querySelector('header').clientHeight + 'px';
}

window.onscroll = function () {
    // if (pageYOffset > 180) {
    //     document.querySelector('header').classList.add('header-fixed');
    //     // document.getElementById('basketIco').style.width = '30px';
    //     // document.getElementById('logo').style.top = '22px';
    // }
    // else {
    //     document.querySelector('header').classList.remove('header-fixed');
    //     // document.getElementById('basketIco').style.width = '50px';
    //     // document.getElementById('logo').style.top = '0';
    // }

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

// window.onmousemove = () => {
//     as = document.getElementById('qa');
//     let y = event.clientX;
//     let x = event.clientY;
//     as.style.top = x +'px';
//     as.style.left = y +'px';
// }

let addedOrder = (id) => {
    orderItem.id = basketOrder.length;
    orderItem.honey = id;
    orderItem.count = document.getElementById('honey' + id).value;
    orderItem.inBasket = !orderItem.inBasket;
    basketOrder.push(orderItem);
}

let addedInBasket = (order) => {

}