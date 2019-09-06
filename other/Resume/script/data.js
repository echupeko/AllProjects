const contentArr = [
    {id: 'skills', description: 'навыки'},
    {id: 'education', description: 'образование'},
    {id: 'development', description: 'работы'},
    {id: 'hobby', description: 'увлечения'}];
const descriptionArr = [
    {id: 'js', pattern: 'skills', skillLevel: 'Начинающий', description: 'Занимаюсь изучением JavaScript'},
    {id: 'html', pattern: 'skills', skillLevel: 'Начинающий', description: 'Занимаюсь изучением HTML'},
    {id: 'css', pattern: 'skills', skillLevel: 'Начинающий', description: 'Занимаюсь изучением CSS'},
    {id: '1C', pattern: 'skills', skillLevel: 'Продвинутый', description: 'Работаю на 1С 7.7'},
    {id: 'ps', pattern: 'skills', skillLevel: 'Выше среднего', description: 'Неплохо владею Adobe Photoshop'},
    {
        id: 'asu2015',
        pattern: 'education',
        skillLevel: 'Бакалавр',
        description: 'В 2015 году получил степень бакалавра в ' +
        'Алтайском государственном университете'
    },
    {
        id: 'asu2017', pattern: 'education', skillLevel: 'Магистр', description: 'В 2017 получил степень магистра в ' +
        'Алтайском государственном университете с красным дипломом'
    },
    {id: 'cardgame', pattern: 'education', skillLevel: 'Начинающий', description: 'Игра на развитие зрительной памяти'},
    {
        id: 'psh',
        pattern: 'education',
        skillLevel: 'Начинающий',
        description: 'Сайт-галлерея, для демонстрации работ иллюстратора'
    },
    //{id: 'constructor', skillLevel: 'Начинающий', description: 'Coming soon'},
    {id: 'bicycle', pattern: 'hobby', skillLevel: 'Опытный', description: 'Очень нравятся прогулки на велосипеде'},
    {
        id: 'snowboard',
        pattern: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Увлекаюсь спусками с горы на сноуборде'
    },
    {
        id: 'photoshop',
        pattern: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Занимаюсь изучением Adobe Photoshop, ' +
        'люблю создавать необычные работы'
    },
    {
        id: 'needlework',
        pattern: 'hobby',
        skillLevel: 'Начинающий',
        description: 'Работа с деревом и металлом успокаивает, ' +
        'а так же предоставляет возможность сделать что-то своими руками'
    },
    // {id: 'adress', pattern: 'contact', skillLevel: 'Начинающий', description: 'Алтайский край, г. Барнаул'},
    // {id: 'email', pattern: 'contact', skillLevel: 'Начинающий', description: 'email: echupeko@gmail.com'},
    // {id: 'socialnetwork', pattern: 'contact', skillLevel: 'Начинающий', description: 'vk instagram whatsapp skype'}
];