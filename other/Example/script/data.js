const contentArr = [
    {id: 'about', title: 'о себе', description: '<h1>чупеко евгений</h1><p>Frontend Developer</p><p>г. Барнаул</p>', type: 'block'},
    {id: 'education', title: 'образование', description: '', type: 'block'},
    {id: 'development', title: 'работы', description: '', type: 'block'},
    {id: 'hobby', title: 'увлечения', description: '', type: 'block'},
    {id: 'contact', title: 'контакты', description: '', type: 'footer'}];
const descriptionArr = [
    {
        id: 'js',
        backgroundColor: '#f7df1e',
        color: 'black',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением JavaScript'
    },
    {
        id: 'reactJS',
        backgroundColor: '#61dafb',
        color: '#494949',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением JavaScript'
    },
    {
        id: 'nodeJS',
        backgroundColor: '#8bc500',
        color: '#666861',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением JavaScript'
    },
    {
        id: 'html',
        backgroundColor: '#e44d26',
        color: 'white',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением HTML'
    },
    {
        id: 'css',
        backgroundColor: '#379ad6',
        color: 'white',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением CSS'
    },
    {
        id: '1c',
        backgroundColor: '#efd930',
        color: '#ff1a00',
        parrent: 'about',
        skillLevel: 'Продвинутый',
        description: 'Работаю на 1С 7.7'
    },
    {
        id: 'Photoshop',
        backgroundColor: '#2a2a43',
        color: '#31c5f0',
        parrent: 'about',
        skillLevel: 'Выше среднего',
        description: 'Неплохо владею Adobe Photoshop'
    },
    {
        id: 'asu2015',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'education',
        skillLevel: 'Бакалавр',
        description: 'В 2015 году получил степень бакалавра в Алтайском государственном университете'
    },
    {
        id: 'asu2017',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'education',
        skillLevel: 'Магистр',
        description: 'В 2017 получил степень магистра в Алтайском государственном университете с красным дипломом'
    },
    {
        id: 'cardgame',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'development',
        skillLevel: 'Начинающий',
        description: 'Игра на развитие зрительной памяти'
    },
    {
        id: 'psh',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'development',
        skillLevel: 'Начинающий',
        description: 'Сайт-галлерея, для демонстрации работ иллюстратора'
    },
    //{id: 'constructor', skillLevel: 'Начинающий', description: 'Coming soon'},
    {
        id: 'bicycle',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        skillLevel: 'Опытный',
        description: 'Очень нравятся прогулки на велосипеде'
    },
    {
        id: 'snowboard',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Увлекаюсь спусками с горы на сноуборде'
    },
    {
        id: 'photoshop',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением Adobe Photoshop, люблю создавать необычные работы'
    },
    {
        id: 'needlework',
        backgroundColor: 'inherit',
        color: 'inherit',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Работа с деревом и металлом успокаивает, а так же ' +
                     'предоставляет возможность сделать что-то своими руками'
    },
    // {id: 'adress', parrent: 'contact', skillLevel: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
    // {id: 'email', parrent: 'contact', skillLevel: 'Начинающий', description: 'email: echupeko@gmail.com'},
    // {id: 'socialnetwork', parrent: 'contact', skillLevel: 'Начинающий', description: 'vk instagram whatsapp skype'}
];