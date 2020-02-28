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

    },
    methods: {

    }
});