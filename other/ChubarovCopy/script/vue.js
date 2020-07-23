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

let hotBlock = new Vue({
    el: "#hotBlock",
    data: {
        title: '',
        oldPrice: 0,
        sale: 0,
        count: 0,
        id: 0,
    },
    methods: {
        addedQuantity() {
            navBar.addedAmount(this.sale);
        }
    }
});

let viewer = new Vue({
    el: "#viewer",
    data: {
        isActive: false,
        src: 'resource/',
        description: '',
        date: ''
    },
    methods: {
        openViewer() {
            this.isActive = !this.isActive;
        },
        loadViewer(item) {
            this.src = item.src;
            this.description = item.description;
            this.date = item.date;
            this.openViewer();
        }
    }
});