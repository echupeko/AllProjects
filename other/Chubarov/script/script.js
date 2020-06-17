let navBarElem = '';

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
}
