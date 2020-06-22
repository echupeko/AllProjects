let quantityGlobal = 0;
let amountGlobal = 0;
let clientHeight = window.innerHeight;
let order = {
    id: 0,
    honey: 0,
    count: 0
};
let basketOrder = [];

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
        navItems: [
            {id: 0, title: 'Главная', href: 'main'},
            {id: 1, title: 'Хит', href: 'bestseller'},
            {id: 2, title: 'Каталог', href: 'catalog'},
            {id: 3, title: 'Сертификаты', href: 'certificate'},
            {id: 4, title: 'О пасеке', href: 'about'},
            {id: 5, title: 'Контакты', href: 'contact'}
        ]
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
            if(this.quantity > 9){
                this.sizeQuantity = '12px';
                this.topQuantity = '-13px';
                this.leftQuantity = '1px';
            }
        },
        scrollingTo(to) {
            let topElem = document.getElementById(to).offsetTop-((pageYOffset > 100)? 70 : 142);
            window.scrollTo({
                top: topElem,
                behavior: 'smooth'
            });
        },
        openBasket() {
            this.visibleForm = !this.visibleForm;
            document.getElementById('basketForm').style.display = (this.visibleForm)? 'flex' : 'none';
            document.getElementById('main').style.display = (!this.visibleForm)? 'block' : 'none';
        }
    }
});


let hotBlock = new Vue({
    el: "#hotBlock",
    data: {
        title: '',
        oldPrice: 0,
        sale: 0,
        count: 0
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
        '<div class="catalogItem flex-display">' +
        '   <h3>Мёд {{cat.name}} {{cat.count}} л.</h3>' +
        '   <img src="resource/bochka.png">' +
        '   <p>цена: {{cat.price}} руб.</p>' +
        '   <div class="flex-display row">' +
        '       <input class="input" type="submit" value="-" @click="handleClick">' +
        '       <input class="input" step="1" value="1" min="1" max="20" type="number">' +
        '       <input class="input" type="submit" value="+" @click="handleClick">' +
        '   </div>' +
        '   <input class="btn" type="submit" value="Добавить к заказу"  @click="handleClick">' +
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
        honeyVueList: honeyList
    },
    methods: {
        orderAdd: function(id) {
            navBar.addedAmount(honeyList[id].price);
            basketOrder.push(honeyList[id]);
        }
    }
});

let basketCatalog = new Vue({
    el: "#basketForm",
    data: {
        title: 'basketItem',
        honeyVueList: basketOrder
    }
})