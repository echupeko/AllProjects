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

// Vue.component('item', {
//     props: ['cat'],
//     template: `
//         <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 18rem;">
//            <h4 class="card-title">Мёд {{cat.name}} {{cat.count}} л.</h4>
//            <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
//            <div class="card-body d-flex flex-column justify-content-center align-items-center">
//                <div class="d-flex flex-column">
//                <p class="card-text">{{cat.price}} Р.</p>
//                    <!--<div class="d-flex flex-row w-100">-->
//                        <!--<input class="input" type="submit" value="-" @click="uppp(cat.id,-1)">-->
//                        <!--<input v-bind:id="'honey' + cat.id" class="input" step="1"  min="1" max="20" type="number" v-model="cat.order">-->
//                        <!--<input class="input" type="submit" value="+"  @click="uppp(cat.id, 1)">-->
//                    <!--</div>-->
//                    <a class="btn btn-warning" @click="$emit('click', cat.id)">В корзину</a>
//                </div>
//            </div>
//         </div>`,
//     methods: {
//         uppp: function (id, count) {
//             this.$emit('up-down', id, count)
//         }
//     }
// })

Vue.component('item', {
    props: ['cat', 'products'],
    data: function () {
        return {
            cntVisibleProd: 0,
            product: null
        }
    },
    template: `
    <div class="card d-flex flex-column justify-content-center align-items-center" style="width: 18rem;">
        <h4 class="card-title">Мёд {{cat.name}}</h4>
        <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
        <div class="info-icon" @click="openDescription(cat.id)"></div>
        <p class="info-text">{{cat.description}}</p>
        <div class="card-body d-flex flex-column justify-content-center align-items-center pb-0">
            <div class="slide-bar w-100 d-flex flex-row justify-content-sm-between align-items-center" >
                <div class="slide-point"></div>
                <div v-for="prod in products" v-if="prod.visible"  class="slide-item" @click="sliders(cat.id, prod.id)">
                    {{prod.count}} л.
                </div>
            </div>
            <div class="w-100 p-3 d-flex flex-row justify-content-around">
                <h5 class="card-text">{{product.price}} Р.</h5>
                <a class="btn btn-warning" @click="$emit('click', cat.id)">В корзину</a>
            </div>
        </div>
    </div>`,
    created: function () {
        this.products.forEach(item => {
            if (item.visible) {
                if(this.cntVisibleProd<1) this.product = this.products[item.id];
                this.cntVisibleProd++;
            }
        })
    },
    mounted: function () {
        var slideBar = document.getElementsByClassName('slide-bar')[this.cat.id];
        slideBar.getElementsByClassName('slide-point')[0].style.width = 100 / this.cntVisibleProd + "%";
        let itemList = slideBar.getElementsByClassName('slide-item');
        for (let i = 0; i < itemList.length; i++) {
            itemList[i].style.width = 100 / this.cntVisibleProd + "%";
        }
    },
    methods: {
        // uppp: function (id, count) {
        //     this.$emit('up-down', id, count)
        // },
        sliders: function (id, count) {
            this.$emit('slide-to', id, count)
        },
        openDescription: function (id) {
            this.$emit('open-description', id)
        }
    }
})

let catalogBlock = new Vue({
    el: "#catalogBlock",
    data: {
        title: 'catalogItem',
        honeyVueList: catalogList,
        visibleDescription: false,
    },
    methods: {
        orderAdd: function (id) {
            for (let i = 0; i < basketOrder.length; i++) {
                if (basketOrder[i].id == id) {
                    honeyList[id].order += basketOrder[i].order;
                    navBar.addedAmount(honeyList[id].price * honeyList[id].order);
                    return;
                }
            }
            navBar.addedAmount(honeyList[id].price * honeyList[id].order);
            basketOrder.push(honeyList[id]);
        },
        upDownCount: function (id, c) {
            this.honeyVueList[id].order += c;
        },
        slideTo: function (id, count) {
            let cntVisibleProd = 0;
            this.$children[id].products.forEach(item => {
                if (item.visible && item.id <= count) cntVisibleProd++;
            })
            document.getElementsByClassName('slide-point')[id].style.transform = "translatex(" + (100 * (cntVisibleProd - 1)) + "%)";
            this.$children[id].product = this.$children[id].products[count];
        },
        openDescription: function (id) {
            this.visibleDescription = !this.visibleDescription;
            infoText = this.$el.children[id].getElementsByClassName('info-text')[0];
            infoText.style.display = this.visibleDescription ? 'block' : 'none';
        }
    }
});

Vue.component('basket-item', {
    props: ['cat'],
    template: `
        <div class="card d-flex flex-row justify-content-center align-items-center" style="width: 18rem;">
           <h4 class="card-title">Мёд {{cat.name}} {{cat.count}} л.</h4>
           <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
           <div class="card-body d-flex flex-row justify-content-center align-items-center">
               <div class="d-flex flex-row ">
                   <input class="input" type="submit" value="-" @click="uppp(cat.id,-1)">
                   <input v-bind:id="'honey' + cat.id" class="input" step="1"  min="1" max="20" type="number" v-model="cat.order">
                   <input class="input" type="submit" value="+"  @click="uppp(cat.id, 1)">
               </div>
               <p class="card-text">{{cat.price * cat.order}} руб.</p>
           </div>
        </div>`,
    methods: {
        uppp: function (id, count) {
            this.$emit('up-down', id, count)
        }
    }
})
let basketCatalog = new Vue({
    el: "#basketForm",
    data: {
        styleObject: {
            top: header.clientHeight + 20 + 'px'
        },
        amount: navBar.amount,
        isActive: visibleMenu,
        honeyVueList: basketOrder
    },
    methods: {
        openBasket() {
            navBar.openBasket()
        },
        upDownCount: function (id, c) {
            catalogBlock.upDownCount(id, c)
        }
    }
})