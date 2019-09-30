const contentArr = [
    {
        id: 'about',
        title: 'о себе',
        description: '<h1>чупеко евгений</h1><p>Frontend Developer</p><p>г. Барнаул</p>',
        type: 'block'
    },
    {
        id: 'education',
        title: 'образование',
        description: '<h1>Алтайский<br>Государственный<br>Университет</h1><p>ФМиИТ</p><p>г. Барнаул</p>',
        type: 'block'
    },
    {
        id: 'work',
        title: 'работа',
        description: '<h1>Программист</h1><p>i категории</p><p>г. Барнаул</p>',
        type: 'block'
    },
    {
        id: 'development',
        title: 'работы',
        description: '<h1>Web site</h1><p>frontend</p><p>practice</p>',
        type: 'block'
    },
    {
        id: 'hobby',
        title: 'увлечения',
        description: '<h1>leisure<br>photo<br>diy</h1><p>leisure</p><p>photo</p>',
        type: 'block'
    },
    {id: 'contact', title: 'контакты', description: '', type: 'footer'}];
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
            header: 'Бакалавр',
            detail: 'ФМиИТ',
            description: '2015 год'
        },
        {
            id: 'asu2017',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'education',
            header: 'Магистр',
            detail: 'ФМиИТ',
            description: '2017 год'
        },
        {
            id: 'rzd',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'work',
            header: 'НУЗ ОКБ на станции Барнаул ОАО РЖД',
            dateStart: '06.03.2017',
            dateEnd: new Date(),
            description: 'программист I-категории'// с ' + dateStart + 'по' + dateEnd
        },
        {
            id: 'cardgame',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'development',
            header: 'Карточная игра',
            detail: 'https://echupeko.github.io/other/CardGame/index.html',
            description: 'Игра на развитие зрительной памяти'
        },
        {
            id: 'psh',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'development',
            header: 'Сайт-галлерея',
            detail: 'https://echupeko.github.io/other/PSH/index.html',
            description: 'Сайт-галлерея, для демонстрации работ иллюстратора'
        },
        {
            id: 'snowboard',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'hobby',
            header: 'Начинающий',
            detail: '',
            description: 'Увлекаюсь спусками с горы на сноуборде'
        },
        {
            id: 'photoprocessing',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'hobby',
            header: 'Cреднее',
            detail: '',
            description: 'Занимаюсь изучением Adobe Photoshop, люблю создавать необычные работы, обрабатывать фотографии'
        },
        {
            id: 'needlework',
            backgroundColor: 'inherit',
            color: 'inherit',
            parrent: 'hobby',
            header: 'Начинающий',
            detail: '',
            description: 'Работа с деревом и металлом успокаивает, а так же ' +
            'предоставляет возможность сделать что-то своими руками'
        },
// {id: 'adress', parrent: 'contact', header: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
// {id: 'email', parrent: 'contact', header: 'Начинающий', description: 'email: echupeko@gmail.com'},
// {id: 'socialnetwork', parrent: 'contact', header: 'Начинающий', description: 'vk instagram whatsapp skype'}
    ]
;