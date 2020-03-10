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
        clicked: false,
        textBtn: 'Показать больше',
        licenses: [
            {class: 'licenseItem', src: 'resource/1.jpg', display: 'block', description: 'Лицензия 1'},
            {class: 'licenseItem', src: 'resource/2.jpg', display: 'none', description: 'Лицензия 2'},
            {class: 'licenseItem', src: 'resource/3.jpg', display: 'none', description: 'Лицензия 3'}
        ]
    },
    methods: {
        viewMore: function () {
            if(!this.clicked) {
                for (let i=0;i<this.licenses.length;i++){
                    this.licenses[i].class += ' minimal';
                    this.licenses[i].display = 'block';
                    this.textBtn = 'Скрыть';
                }
            }
            else {
                for (let i=0;i<this.licenses.length;i++){
                    this.licenses[i].class += 'licenseItem';
                    if(i) this.licenses[i].display = 'none';
                    else  this.licenses[i].display = 'block';
                    this.textBtn = 'Показать больше';
                }
            }
            this.clicked = !this.clicked;
        },
        openLicense: function (cnt) {
            for (let i = 0; i < this.licenses.length; i++) {
                this.licenses[i].class = 'licenseItem';
                if (i != cnt) {
                    this.licenses[i].display = 'none';
                    this.textBtn = 'Показать больше';
                    this.clicked = !this.clicked;
                }
            }
        }
    }
});