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
            {href:'#',text:'О нас',visible:1},
            {href:'#',text:'Каталог',visible:1},
            {href:'#',text:'Контакты',visible:1}
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

Vue.component('item',{
    props: ['cat'],
    template:  '' +
    '<div>' +
    '   <h3>Мёд {{cat.text}} л.</h3>' +
    '   <p>цена: 3500 руб.</p>' +
    '   <div>' +
    '       <input type="submit" value="-">' +
    '       <input step="1" value="1" type="number">' +
    '       <input type="submit" value="+">' +
    '   </div>' +
    '   <input type="submit" value="Добавить к заказу">' +
    '</div>'
})

let catalogBlockApp = new Vue({
    el: "#catalogBlock",
    data: {

        catalogs: [
            {id:0,text: '1'},
            {id:1,text: '2'},
            {id:2,text: '3'}
        ]
    },
    methods: {}
});