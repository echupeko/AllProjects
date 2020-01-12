new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        width: 0
    },
    methods: {
        nameFunction: function () {
            for (let i=0; i< 20; i++)
                this.width += 5;
        }
    }
});