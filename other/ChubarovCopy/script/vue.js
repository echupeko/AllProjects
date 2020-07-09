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
            let topElem = document.getElementById(to).offsetTop - header.clientHeight;
            window.scrollTo({
                top: topElem,
                behavior: 'smooth'
            });
        },
        openBasket() {
            this.visibleForm = !this.visibleForm;
            document.getElementById('basketForm').style.display = (this.visibleForm) ? 'flex' : 'none';
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
    template: `
        <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 18rem;">
           <h4 class="card-title">Мёд {{cat.name}} {{cat.count}} л.</h4>
           <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
           <div class="card-body d-flex flex-column justify-content-center align-items-center">
               <p class="card-text">цена: {{cat.price}} руб.</p>
               <div class="d-flex flex-column">
                   <div class="d-flex flex-row w-100">
                       <input class="input" type="submit" value="-" @click="uppp(cat.id,-1)">
                       <input v-bind:id="'honey' + cat.id" class="input" step="1"  min="1" max="20" type="number" v-model="cat.order">
                       <input class="input" type="submit" value="+"  @click="uppp(cat.id, 1)">
                   </div>
                   <a class="btn btn-warning" @click="$emit('click', cat.id)">Добавить к заказу</a>
               </div>
           </div>
        </div>`,
    methods: {
        uppp: function (id, count) {
            this.$emit('up-down', id, count)
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
            navBar.addedAmount(honeyList[id].price * honeyList[id].order);
            basketOrder.push(honeyList[id]);
        },
        upDownCount: function (id, c) {
            this.honeyVueList[id].order += c;
        }
    }
});

let basketCatalog = new Vue({
    el: "#basketForm",
    data: {
        isActive: visibleMenu,
        honeyVueList: basketOrder
    }
})