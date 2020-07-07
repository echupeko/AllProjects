let quantityGlobal = 0;
let amountGlobal = 0;
let clientHeight = window.innerHeight;


// let myMixin = {
//     created: function () {
//         this.addedOrder();
//         this.addedInBasket();
//     },
//     methods: {
//         addedOrder: function (id, count) {
//             orderItem.honey = id;
//             orderItem.count = count;
//         },
//         addedInBasket: function (order) {
//             basketOrder.push(order)
//         }
//     }
// }

let navBar = new Vue({
    el: "#navBar",
    data: {
        visibleForm: false,
        amount: 'Корзина пуста',
        quantity: 0,
        visibleQuantity: 'hidden',
        sizeQuantity: '14px',
        topQuantity: '-2px',
        leftQuantity: '4px',
        logoSrc: 'resource/logo.png',
        basketSrc: 'resource/basket.png',
        // basketSrc: '../../node_modules/bootstrap-icons/icons/basket.svg',
        navItems: navList
    },
    methods: {
        addedAmount(sal) {
            quantityGlobal++;
            amountGlobal += sal;
            this.quantity = quantityGlobal;
            this.amount = 'Заказ на ' + amountGlobal + 'руб.';
            if (this.amount) {
                this.visibleQuantity = 'visible'
            }
            if (this.quantity > 9) {
                this.sizeQuantity = '12px';
                this.topQuantity = '-13px';
                this.leftQuantity = '1px';
            }
        },
        scrollingTo(to) {
            document.getElementById('navbarSupportedContent').classList.remove('show');
            let topElem = document.getElementById(to).offsetTop; //- ((pageYOffset > 100) ? 70 : 142);
            window.scrollTo({
                top: topElem,
                behavior: 'smooth'
            });
        },
        openBasket() {
            this.visibleForm = !this.visibleForm;
            document.getElementById('basketForm').style.display = (this.visibleForm) ? 'flex' : 'none';
             // document.getElementById('main').style.display = (!this.visibleForm) ? 'block' : 'none';
        }
    }
});

Vue.component('slider-item', {
    props: ['slide'],
    template: '' +
    '<div class="carousel-item h-100" :class="{\'active\': !slide.id}">' +
    '   <img :src="\'resource/slider_\'+slide.id+\'.png\'" class="d-block h-100" :alt="slide.title">' +
    '   <div class="carousel-caption d-flex flex-column align-items-center">' +
    '       <h5>{{slide.title}}</h5>' +
    '       <p>{{slide.description}}</p>' +
    '   </div>' +
    '</div>'
})

let carousel = new Vue({
    el: "#carouselExampleCaptions",
    data: {
        isActive: true,
        title: 'sliderItems',
        sliderList: carouselList
    }
});

let hotBlock = new Vue({
    el: "#hotBlock",
    data: {
        title: '',
        oldPrice: 0,
        sale: 0,
        count: 0,
        id: 0
    },
    methods: {
        addedQuantity() {
            navBar.addedAmount(this.sale);
        }
    }
});

Vue.component('item', {
    props: ['cat'],
    template: '' +
    '<div class="d-flex flex-column w-20 cat">' +
    '   <h3>Мёд {{cat.name}} {{cat.count}} л.</h3>' +
    '   <img src="resource/bochka.png">' +
    '   <p>цена: {{cat.price}} руб.</p>' +
    '   <div class="flex-display row">' +
    '       <input class="input" type="submit" value="-" @click="handleClick">' +
    '       <input v-bind:id="\'honey\' + cat.id" class="input" step="1"  min="1" max="20" type="number">' +
    '       <input class="input" type="submit" value="+" @click="handleClick">' +
    '   </div>' +
    '   <input class="btn" type="submit" value="Добавить к заказу">' +
    '</div>',
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
})

let catalogBlock = new Vue({
    el: "#catalogBlock",
    data: {
        title: 'catalogItem',
        honeyVueList: honeyList,
    },
    methods: {
        orderAdd: function (id) {
            navBar.addedAmount(honeyList[id].price);
            basketOrder.push(honeyList[id]);
        }
    }
});
//
// let basketCatalog = new Vue({
//     el: "#basketForm",
//     data: {
//         title: 'basketItem',
//         honeyVueList: basketOrder
//     }
// })
//
//
// let Component = Vue.extend({
//     mixins: [myMixin]
// });
//
// let component = new Component();