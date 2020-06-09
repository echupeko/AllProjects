const logoIcon = "resource/logo.png";
const logoHoverIcon = "resource/logo_hover.png";
const licenseMain = "resource/1.jpg";
const licenseFirst = "resource/2.jpg";
const licenseSecond = "resource/3.jpg";

let navBarApp = new Vue({
    el: "#navBar",
    data: {
        title: "Hello World!",
        countOrder: 0,
        logoSrc: logoIcon,
        basketSrc: "resource/basket.png",
        navItems: [
            {href: '#', text: 'О нас', visible: 1},
            {href: '#', text: 'Каталог', visible: 1},
            {href: '#', text: 'Контакты', visible: 1}
        ]
    },
    methods: {
        revers: function () {
            this.countOrder++;
        },
        imgOver: function () {
            this.logoSrc = logoHoverIcon;
        },
        imgOut: function () {
            this.logoSrc = logoIcon;
        }
    }
});

let contentBlockApp = new Vue({
    el: "#contentBlock",
    data: {
        resource: '',
        id: 0,
        seen: false,
        clicked: false,
        textBtn: 'Показать больше',
        licenses: [
            {class: 'licenseItem', src: licenseMain, display: 'block', description: 'Лицензия 1'},
            {class: 'licenseItem', src: licenseFirst, display: 'block', description: 'Лицензия 2'},
            {class: 'licenseItem', src: licenseSecond, display: 'block', description: 'Лицензия 3'}
        ]
    },
    methods: {
        viewMore: function () {
            this.seen = !this.seen;
        },
        openLicense: function (cnt) {
            this.id = cnt;
            this.seen = true;
        }
    }
});

Vue.component('item', {
    props: ['cat'],
    template: '' +
    '<div class="catalogItem">' +
    '   <h3>Мёд {{cat.volume}} л.</h3>' +
    '   <img src="resource/bochka.png">' +
    '   <p>цена: {{cat.price}} руб.</p>' +
    '   <div>' +
    '       <input type="submit" value="-" @click="tre">' +
    '       <input step="1" v-model="cat.count" type="number">' +
    '       <input type="submit" value="+" @click="tre">' +
    '   </div>' +
    '   <input type="submit" value="Добавить к заказу">' +
    '</div>'
})

let catalogBlockApp = new Vue({
        el: "#catalogBlock",
        data: {
            catalogs: [
                {id: 0, volume: '1', price: 1500, count: 0},
                {id: 1, volume: '2', price: 2900, count: 0},
                {id: 2, volume: '3', price: 4000, count: 0}
            ]
        },
        methods: {
            tre: function () {
                db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
            }
        }
    })
;