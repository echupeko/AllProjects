// let app = new Vue({
//     el: "#app",
//     data: {
//         title: "Hello World!",
//         countOrder: 0,
//         logoSrc: logoIcon,
//         basketSrc: "resource/basket.png",
//         navItems: [
//             {href: '#', text: 'О нас', visible: 1},
//             {href: '#', text: 'Каталог', visible: 1},
//             {href: '#', text: 'Контакты', visible: 1}
//         ]
//     },
//     methods: {
//         revers: function () {
//             this.countOrder++;
//         },
//         imgOver: function () {
//             this.logoSrc = logoHoverIcon;
//         },
//         imgOut: function () {
//             this.logoSrc = logoIcon;
//         }
//     }
// });

Vue.component('item', {
    props: ['site'],
    template: '' +
        '<div class="blocks" :style="{ backgroundImage: \'url(\'+ site.src +\')\'}">'+
        '   <a :href="site.url" class="siteItem">' +
        '       <h3>{{site.title}}</h3>' +
        '   </a>'+
        '   <input type="submit" value="Открыть">' +
        '</div>'
})

let siteBlock = new Vue({
        el: "#siteBlock",
        data: {
            sites: [
                {id: 0, title: 'CardGame', url: 'other/CardGame/index.html', src: 'resource/CardGame.png'},
                {id: 1, title: 'Example', url: 'other/Example/index.html', src: 'resource/Example.png'},
                {id: 2, title: 'Honey', url: 'other/Honey/index.html', src: 'resource/Honey.png'},
                {id: 3, title: 'Honey_VUE', url: 'other/Honey_VUE/index.html', src: 'resource/Honey_VUE.png'},
                {id: 4, title: 'Horizontal', url: 'other/Horizontal/index.html', src: 'resource/Horizontal.png'},
                {id: 5, title: 'PSH', url: 'other/PSH/index.html', src: 'resource/PSH.png'},
                {id: 6, title: 'Resume', url: 'other/Resume/index.html', src: 'resource/Resume.png'},
                {id: 7, title: 'Tutorial', url: 'other/Tutorial/index.html', src: 'resource/Tutorial.png'}

            ]
        }
    })
;

window.onload = () => {
    document.getElementById('main').style.width = window.clientHeight + 'px';
}