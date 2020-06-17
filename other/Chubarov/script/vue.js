let quantityGlobal = 0;
let amountGlobal = 0;
let clientHeight = window.innerHeight;

Vue.component('item', {
    props: [],
    template: ''
});

let navBar = new Vue({
    el: "#navBar",
    data: {
        amount: 'Корзина пуста',
        quantity: 0,
        visibleQuantity: 'hidden',
        sizeQuantity: '14px',
        topQuantity: '-16px',
        leftQuantity: '4px',
        logoSrc: 'resource/logo.png',
        basketSrc: 'resource/basket.png',
        navItems: [
            {id: 0, title: 'Главная', href: 'main'},
            {id: 1, title: 'Хит', href: 'bestseller'},
            {id: 2, title: 'Каталог', href: 'catalog'},
            {id: 3, title: 'Сертификаты', href: 'certificate'},
            {id: 4, title: 'О пасеке', href: 'about'}
        ]
    },
    methods: {
        addedAmount(sal) {
            quantityGlobal++;
            amountGlobal += sal;
            this.quantity = quantityGlobal;
            this.amount = 'Заказ на ' + amountGlobal + 'руб.';
            if (this.amount) {
                this.visibleQuantity = 'visible'
            }
            if(this.quantity > 9){
                this.sizeQuantity = '12px';
                this.topQuantity = '-13px';
                this.leftQuantity = '1px';
            }
        },
        scrollingTo(to) {
            document.getElementById(to).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    }
});


let hotBlock = new Vue({
    el: "#hotBlock",
    data: {
        title: '',
        sale: 0,
        count: 0
    },
    methods: {
        addedQuantity() {
            navBar.addedAmount(this.sale);
        }
    }
});

window.onload = function () {
    honeyList.forEach(item => {
        if(item.sale) {
            hotBlock.title = item.name;
            hotBlock.sale = item.salePrice;
            hotBlock.count = item.count;
        }
    })
}