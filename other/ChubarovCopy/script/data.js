const honeyList = [
    {
        id: 0, //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '3',
        order: 1,
        unit: 'литр',
        price: 1980,
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 1, //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '2',
        order: 1,
        unit: 'литр',
        price: 1300,
        salePrice: 1150,
        min: 1,
        max: 20, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 2, //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '1',
        order: 1,
        unit: 'литр',
        price: 600,
        salePrice: 550,
        min: 1,
        max: 57, //остаток
        buy: false, //флаг для заказа
        sale: true //участвует в распродаже
    },
    {
        id: 3, //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '0,5',
        order: 1,
        unit: 'литр',
        price: 450,
        salePrice: 400,
        min: 1,
        max: 50, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 4, //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '0,3',
        order: 1,
        unit: 'литр',
        price: 320,
        salePrice: 250,
        min: 1,
        max: 31, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    }
];

let navList = [
    {id: 0, title: 'Главная', href: 'main'},
    {id: 1, title: 'Хит', href: 'bestseller'},
    {id: 2, title: 'Каталог', href: 'catalog'},
    {id: 3, title: 'Сертификаты', href: 'certificate'},
    {id: 4, title: 'О пасеке', href: 'about'},
    {id: 5, title: 'Контакты', href: 'contact'}
];

let carouselList = [
    {id: 0, title: 'Наша большая семья', description: 'Количество семейств насчитывает больше десятка'},
    {
        id: 1,
        title: 'Алтайские пейзажи',
        description: 'Горная местность позволяет получать наивкуснейший и разнообразный мёд'
    },
    {id: 2, title: 'Сотовый мёд', description: 'Мы следим за своей продукцией'},
    {
        id: 3,
        title: 'Наша пасека',
        description: 'Даже медведи непрочь посетить нашу пасеку, но увы для них мёд не собираем'
    }
]

const catalogList = [
    {
        id: 0, //гречичный
        name: 'гречишный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                price: 1900,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                price: 1600,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                price: 750,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                price: 320,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 1, //гречичный
        name: 'горно-таёжный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                price: 1930,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                price: 1620,
                visible: false,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                price: 790,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                price: 350,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 2, //гречичный
        name: 'луговой',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                price: 2000,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                price: 1650,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                price: 780,
                visible: true,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                price: 360,
                visible: false,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 3, //гречичный
        name: 'васильковый',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                price: 1980,
                visible: false,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                price: 1700,
                visible: true,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                price: 800,
                visible: false,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                price: 400,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },
    {
        id: 4, //гречичный
        name: 'луговое разнотравье',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        products: [
            {
                id: 0,
                count: 3,
                price: 2100,
                visible: true,
                quantity: 0
            },
            {
                id: 1,
                count: 2,
                price: 1800,
                visible: false,
                quantity: 0
            },
            {
                id: 2,
                count: 1,
                price: 900,
                visible: false,
                quantity: 0
            },
            {
                id: 3,
                count: 0.5,
                price: 450,
                visible: true,
                quantity: 0
            },
        ],
        order: 1,
        unit: 'л.',
        salePrice: 1630,
        min: 1,
        max: 14, //остаток
        buy: false, //флаг для заказа
        sale: false //участвует в распродаже
    },

]

let certificateList = [
    {
        id: 0,
        src: 'resource/certificate/1.jpg',
        title: 'Серитификат',
        description: 'Сертификат выдан за то что у нас хороший мёд и здоровые пчёлы',
        date: '01.01.2020'
    },
    {
        id: 1,
        src: 'resource/certificate/2.jpg',
        title: 'Серитификат',
        description: 'Сертификат выдан за то что у нас хороший мёд и здоровые пчёлы',
        date: '01.02.2020'
    },
    {
        id: 2,
        src: 'resource/certificate/3.jpg',
        title: 'Серитификат',
        description: 'Сертификат выдан за то что у нас хороший мёд и здоровые пчёлы',
        date: '01.03.2020'
    },
    {
        id: 3,
        src: 'resource/certificate/4.jpg',
        title: 'Серитификат',
        description: 'Сертификат выдан за то что у нас хороший мёд и здоровые пчёлы',
        date: '01.04.2020'
    },
    {
        id: 4,
        src: 'resource/certificate/5.jpg',
        title: 'Серитификат',
        description: 'Сертификат выдан за то что у нас хороший мёд и здоровые пчёлы',
        date: '01.05.2020'
    }
]