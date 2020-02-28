let app = new Vue({
    el: "#navBar",
    data: {
        title: "Hello World!",
        countOrder: 0,
        imageSrc: "resource/logo.png"
    },
    methods: {
        revers: function () {
            this.countOrder++;
        },
        imgOver: function () {
            this.imageSrc = "resource/logo_hover.png"
        },
        imgOut: function () {
            this.imageSrc = "resource/logo.png"
        }
    }
});


