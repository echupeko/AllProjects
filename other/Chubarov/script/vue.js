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
            {id: 0, title: 'Главная', href: '#main'},
            {id: 1, title: 'Хит', href: '#bestseller'},
            {id: 2, title: 'Каталог', href: '#catalog'},
            {id: 3, title: 'Сертификаты', href: '#certificate'},
            {id: 4, title: 'О пасеке', href: '#about'}
        ]
    },
    methods: {
        addedAmount() {
            this.quantity++;
            this.amount = 'Заказ на ' + this.quantity * 50 + 'руб.';
            if (this.amount) {
                this.visibleQuantity = 'visible'
            }
            if(this.quantity > 9){
                this.sizeQuantity = '12px';
                this.topQuantity = '-13px';
                this.leftQuantity = '1px';
            }
        }
    }
});