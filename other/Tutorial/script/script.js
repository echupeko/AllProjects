let navBarApp = new Vue({
    el: "#navBar",
    data: {
        title: "Hello World!",
        countOrder: 0,
        logoSrc: "resource/logo.png",
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
            this.logoSrc = "resource/logo_hover.png"
        },
        imgOut: function () {
            this.logoSrc = "resource/logo.png"
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
            {class: 'licenseItem', src: 'resource/1.jpg', display: 'block', description: 'Лицензия 1'},
            {class: 'licenseItem', src: 'resource/2.jpg', display: 'block', description: 'Лицензия 2'},
            {class: 'licenseItem', src: 'resource/3.jpg', display: 'block', description: 'Лицензия 3'}
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