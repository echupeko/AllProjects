let navBar = new Vue({
    el: "#navBar",
    data: {
        visibleForm: false,
        basketCatalog: basketOrder,
        amount: '',
        quantity: 0,
        visibleQuantity: 'none',
        sizeQuantity: '15px',
        logoSrc: 'resource/logo.png',
        basketSrc: 'resource/basket.png',
        // basketSrc: '../../node_modules/bootstrap-icons/icons/basket.svg',
        navItems: navList
    },
    updated: function () {
        this.amount = amountGlobal + ' руб.';
    },
    methods: {
        addedAmount: function (sal) {
            quantityGlobal++;
            amountGlobal += sal;
            this.quantity = quantityGlobal;
            this.amount = amountGlobal + ' руб.';
            if (this.amount) {
                this.visibleQuantity = 'block';
            }
            if (amountGlobal > 9999) {
                this.sizeQuantity = '12px';
                this.topQuantity = '0px';
                this.leftQuantity = '2px';
            }
        },
        updateAmount: function () {
            amountGlobal = 0;
            this.basketCatalog.forEach(item => {
                let catalogItem = catalogList[item.honey].products[item.prod];
                if (catalogItem.quantity > 0) {
                    amountGlobal += catalogItem.quantity * catalogItem.price;
                    console.log(catalogItem, catalogList[item.honey], amountGlobal)
                }
            })
            this.amount = amountGlobal + ' руб.';
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
                <a class="btn btn-warning" @click="$emit('click', cat.id, product.id, 1)">В корзину</a>
            </div>
        </div>
    </div>`,
    created: function () {
        this.products.forEach(item => {
            if (item.visible) {
                if (this.cntVisibleProd < 1) this.product = this.products[item.id];
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
        basketCat: basketOrder
    },
    methods: {
        orderAdd: function (id, idProd, c) {
            let producte = this.honeyVueList[id].products[idProd];
            for (let i = 0; i < this.basketCat.length; i++) {
                if (this.basketCat[i].honey == id && this.basketCat[i].prod == idProd) {
                    producte.quantity += c;
                    navBar.addedAmount(producte.price * c);
                    return;
                }
            }
            producte.quantity += c;
            navBar.addedAmount(producte.price * c);
            orderItem = {
                id: quantityGlobal - 1,
                honey: id,
                prod: idProd
            }
            this.basketCat.push(orderItem);
        },
        upDownCount: function (id, idProd, c) {
            let producte = this.honeyVueList[id].products[idProd];
            producte.quantity += c;
            navBar.addedAmount(producte.price * c);
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
    data: function () {
        return {
            cntVisibleProd: 0,
            catt: catalogList,
            honey: null,
            product: null
        }
    },
    template: `
        <div class="card d-flex flex-row justify-content-center align-items-center" style="width: 18rem;">
           <h4 class="card-title">Мёд {{honey.name}} {{product.count}} л.</h4>
           <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
           <div class="card-body d-flex flex-row justify-content-center align-items-center">
               <div class="d-flex flex-row ">
                   <input class="input" type="submit" value="-" @click="uppp(cat.honey, cat.prod, -1)">
                   <input v-bind:id="'honey' + cat.id" class="input" step="1"  min="1" max="20" type="number" v-model="product.quantity">
                   <input class="input" type="submit" value="+"  @click="uppp(cat.honey, cat.prod, 1)">
               </div>
               <p class="card-text">{{product.price * product.quantity}} руб.</p>
               <div @click="removeOrder(cat.honey, cat.prod)"> 
                   <svg style="margin-left: 20px" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                   </svg>
               </div>
           </div>
        </div>`,
    //@click="removeee(cat.honey, cat.prod)">
    created: function () {
        this.honey = this.catt[this.cat.honey];
        this.product = this.honey.products[this.cat.prod];
    },

    methods: {
        uppp: function (id, idProd, count) {
            this.$emit('up-down', id, idProd, count)
        },
        removeOrder: function (id, idProd) {
            this.$emit('remove', id, idProd)
        },
    }
});
let basketCatalog = new Vue({
    el: "#basketForm",
    data: {
        styleObject: {
            top: header.clientHeight + 20 + 'px'
        },
        amount: navBar.amount,
        isActive: visibleMenu,
        basketCatalog: basketOrder
    },
    updated: function () {
        this.amount = navBar.amount;

    },
    methods: {
        openBasket() {
            navBar.openBasket()
        },
        upDownCount: function (id, idProd, c) {
            catalogBlock.upDownCount(id, idProd, c);
            this.amount = navBar.amount;
        },
        removeOrder: function (id, idProd) {
            console.log(id, catalogList[id].name, catalogList[id].products[idProd].count)
            let index = this.basketCatalog.find(item => item.honey == id && item.prod == idProd);
            catalogList[id].products[idProd].quantity = 0;
            this.basketCatalog.splice(index, 1);
            navBar.updateAmount();
        }
    }
});