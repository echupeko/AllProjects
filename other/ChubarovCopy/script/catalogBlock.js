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
        <div class="card-head d-flex flex-column justify-content-center align-items-center w-100 pb-0">
            <h4 class="card-title">Мёд {{cat.name}}</h4>
            <img src="resource/bochka.png" class="card-img-top" v-bind:alt="'Мёд' + cat.name">
            <div class="info-icon" @click="openDescription(cat.id)"></div>
            <p class="info-text">{{cat.description}}</p>
        </div>
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