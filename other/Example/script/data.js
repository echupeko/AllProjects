const contentArr = [
    {id: 'about', title: 'о себе', description: '<h1>чупеко евгений</h1><p>Frontend Developer</p><p>г. Барнаул</p>', type: 'block'},
    {id: 'education', title: 'образование', description: '', type: 'block'},
    {id: 'development', title: 'работы', description: '', type: 'block'},
    {id: 'hobby', title: 'увлечения', description: '', type: 'block'},
    {id: 'contact', title: 'контакты', description: '', type: 'footer'}];
const descriptionArr = [
    {
        id: 'js',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением JavaScript'
    },
    {
        id: 'html',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением HTML'
    },
    {
        id: 'css',
        parrent: 'about',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением CSS'
    },
    {
        id: '1c',
        parrent: 'about',
        skillLevel: 'Продвинутый',
        description: 'Работаю на 1С 7.7'
    },
    {
        id: 'ps',
        parrent: 'about',
        skillLevel: 'Выше среднего',
        description: 'Неплохо владею Adobe Photoshop'
    },
    {
        id: 'asu2015',
        parrent: 'education',
        skillLevel: 'Бакалавр',
        description: 'В 2015 году получил степень бакалавра в Алтайском государственном университете'
    },
    {
        id: 'asu2017',
        parrent: 'education',
        skillLevel: 'Магистр',
        description: 'В 2017 получил степень магистра в Алтайском государственном университете с красным дипломом'
    },
    {
        id: 'cardgame',
        parrent: 'development',
        skillLevel: 'Начинающий',
        description: 'Игра на развитие зрительной памяти'
    },
    {
        id: 'psh',
        parrent: 'development',
        skillLevel: 'Начинающий',
        description: 'Сайт-галлерея, для демонстрации работ иллюстратора'
    },
    //{id: 'constructor', skillLevel: 'Начинающий', description: 'Coming soon'},
    {
        id: 'bicycle',
        parrent: 'hobby',
        skillLevel: 'Опытный',
        description: 'Очень нравятся прогулки на велосипеде'
    },
    {
        id: 'snowboard',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Увлекаюсь спусками с горы на сноуборде'
    },
    {
        id: 'photoshop',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением Adobe Photoshop, люблю создавать необычные работы'
    },
    {
        id: 'needlework',
        parrent: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Работа с деревом и металлом успокаивает, а так же ' +
                     'предоставляет возможность сделать что-то своими руками'
    },
    // {id: 'adress', parrent: 'contact', skillLevel: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
    // {id: 'email', parrent: 'contact', skillLevel: 'Начинающий', description: 'email: echupeko@gmail.com'},
    // {id: 'socialnetwork', parrent: 'contact', skillLevel: 'Начинающий', description: 'vk instagram whatsapp skype'}
];