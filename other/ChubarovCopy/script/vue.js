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
        amount: '',
        quantity: 0,
        visibleQuantity: 'none',
        sizeQuantity: '15px',
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
            this.amount = amountGlobal + ' руб.';
            if (this.amount) {
                this.visibleQuantity = 'block'
            }
            if (amountGlobal > 9999) {
                this.sizeQuantity = '12px';
                this.topQuantity = '0px';
                this.leftQuantity = '2px';
            }
        },
        scrollingTo(to) {
            document.getElementById('navbarSupportedContent').classList.remove('show');
            let topElem = document.getElementById(to).offsetTop - ((pageYOffset > 100) ? document.querySelector('header').clientHeight : document.querySelector('header').clientHeight);
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
    '<div class="card" style="width: 18rem;">' +
    '   <h5 class="card-title">Мёд {{cat.name}} {{cat.count}} л.</h5>' +
    '   <img src="resource/bochka.png" class="card-img-top" alt="...">' +
    '   <div class="card-body">' +
    '       <p class="card-text">цена: {{cat.price}} руб.</p>'+
    '       <div class="d-flex flex-row">' +
    '           <input class="input" type="submit" value="-" @click="handleClick">' +
    '          <input v-bind:id="\'honey\' + cat.id" class="input" step="1"  min="1" max="20" type="number">' +
    '          <input class="input" type="submit" value="+" @click="handleClick">' +
    '       </div>' +
    '      <a href="#" class="btn btn-primary">Добавить к заказу</a>' +
    '   </div>' +
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