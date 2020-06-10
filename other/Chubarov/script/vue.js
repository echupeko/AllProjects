Vue.component('item', {
    props: [],
    template: ''
});

let navBar = new Vue({
    el: "#navBar",
    data: {
        amount: 0,
        quantity: 0,
        visibleAmount: 'hidden',
        logoSrc: 'resource/logo.png',
        basketSrc: 'resource/basket.png',
        navItems: [
            {id: 0, title: 'Главная', href: '#main'},
            {id: 1, title: 'Хит', href: '#bestseller'},
            {id: 2, title: 'Каталог', href: '#catalog'},
            {id: 3, title: 'Сертификаты', href: '#certificate'},
            {id: 4, title: 'О пасеке', href: '#other'}
        ]
    }
});