var app = new Vue({
    el: "#navBar",
    data: {
        title: "Hello World!",
        countOrder: 0
    },
    methods: {
        revers: function () {
            this.countOrder++;
        },

    }
});


