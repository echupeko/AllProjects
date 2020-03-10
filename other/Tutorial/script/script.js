const logoIcon = "resource/logo.png";
const logoHoverIcon = "resource/logo_hover.png";
const licenseMain = "resource/1.png";
const licenseFirst = "resource/2.png";
const licenseSecond = "resource/3.png";

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