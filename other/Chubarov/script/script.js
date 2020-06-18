const btnToUp = document.getElementById('btn-to-up');

window.onload = function () {
    honeyList.forEach(item => {
        if(item.sale) {
            hotBlock.title = item.name;
            hotBlock.oldPrice = item.price;
            hotBlock.sale = item.salePrice;
            hotBlock.count = item.count;
        }
    })
}

window.onscroll = function () {
    if (pageYOffset > 100) {
        document.querySelector('header').classList.add('header-fixed');
        // document.getElementById('basketIco').style.width = '30px';
        // document.getElementById('logo').style.top = '22px';
    }
    else {
        document.querySelector('header').classList.remove('header-fixed');
        // document.getElementById('basketIco').style.width = '50px';
        // document.getElementById('logo').style.top = '0';
    }

    if (pageYOffset > 400) {
        btnToUp.style.opacity = '1';
        btnToUp.style.cursor = 'pointer';
    }
    else {
        btnToUp.style.opacity = '0';
        btnToUp.style.cursor = 'auto';
    }
}

// window.onmousemove = () => {
//     as = document.getElementById('qa');
//     let y = event.clientX;
//     let x = event.clientY;
//     as.style.top = x +'px';
//     as.style.left = y +'px';
// }

