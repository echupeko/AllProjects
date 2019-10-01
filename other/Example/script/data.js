const contentArr = [
    {
        id: 'about',
        title: 'о себе',
        description: '<h1>чупеко евгений</h1><p>Frontend Developer</p><p>г. Барнаул</p>',
    },
    {
        id: 'education',
        title: 'образование',
        description: '<h1>Алтайский<br>Государственный<br>Университет</h1><p>ФМиИТ</p><p>г. Барнаул</p>',
    },
    {
        id: 'work',
        title: 'работа',
        description: '<h1>Программист</h1><p>i категории</p><p>г. Барнаул</p>',
    },
    {
        id: 'development',
        title: 'разработка',
        description: '<h1>Веб-сайты</h1><p>разработка интерфейса</p><p>парктика</p>',
    },
    {
        id: 'hobby',
        title: 'увлечения',
        description: '<h1>Активный отдых<br>Фотография<br>рукоделие</h1><p>электроника</p><p>автомобили</p>',
    },
    {
        id: 'contact',
        title: 'контакты',
        description: ''
    }];
const descriptionArr = [
    {
        id: 'js',
        backgroundColor: '#f7df1e',
        color: 'black',
        parrent: 'about',
    },
    {
        id: 'html',
        backgroundColor: '#e44d26',
        color: 'white',
        parrent: 'about',
    },
    {
        id: 'css',
        backgroundColor: '#379ad6',
        color: 'white',
        parrent: 'about',
    },
    {
        id: '1c',
        backgroundColor: '#efd930',
        color: '#ff1a00',
        parrent: 'about',
    },
    {
        id: 'Photoshop',
        backgroundColor: '#2a2a43',
        color: '#31c5f0',
        parrent: 'about',
    },
    {
        id: 'asu2015',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'education',
        description: '<h1>Бакалавр</h1><p>ФМиИТ</p><p>2015 год</p>'
    },
    {
        id: 'asu2017',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'education',
        description: '<h1>Магистр</h1><p>ФМиИТ</p><p>2017 год</p>'
    },
    {
        id: 'rzd',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'work',
        description: '<h1>НУЗ ОКБ на станции Барнаул ОАО РЖД</h1><p>с <b>06.03.2017</b> по <b>' +
        (new Date()).toLocaleDateString('ru') + '</b></p><p>программист I-категории</p>'
    },
    {
        id: 'cardgame',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'development',
        description: '<a href="../../other/CardGame/index.html"><h1>Карточная игра</h1></a>' +
        '<p>Игра на развитие зрительной памяти</p>'
    },
    {
        id: 'psh',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'development',
        description: '<a href="../../other/PSH/index.html"><h1>Сайт-галлерея</h1></a>' +
        '<p>Сайт-галлерея, для демонстрации работ иллюстратора</p>'
    },
    {
        id: 'snowboard',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        description: '<h1>Сноуборд</h1><p>Увлекаюсь спусками с горы на сноуборде</p>'
    },
    {
        id: 'photoprocessing',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        description: '<h1>Adobe Photoshop</h1><p>Занимаюсь изучением Adobe Photoshop, люблю создавать необычные' +
        ' работы, обрабатывать фотографии</p>'
    },
    {
        id: 'needlework',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        description: '<h1>Рукоделие</h1><p>Работа с деревом и металлом успокаивает, а так же ' +
        'предоставляет возможность сделать что-то своими руками</p>'
    }
// {id: 'adress', parrent: 'contact', header: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
// {id: 'email', parrent: 'contact', header: 'Начинающий', description: 'email: echupeko@gmail.com'},
// {id: 'socialnetwork', parrent: 'contact', header: 'Начинающий', description: 'vk instagram whatsapp skype'}
];