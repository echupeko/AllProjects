new Vue({
    el: "#navBar",
    data: {
        title: "Hello World!",
        countOrder: 0
    },
    methods: {
        widthUp: function () {
            this.width += 5;
        },

    }
});

Vue.component('todo-item', {
    template: '<li>Задача 1</li>'
})

var app = new Vue