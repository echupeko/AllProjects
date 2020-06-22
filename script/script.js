// // let app = new Vue({
// //     el: "#app",
// //     data: {
// //         title: "Hello World!",
// //         countOrder: 0,
// //         logoSrc: logoIcon,
// //         basketSrc: "resource/basket.png",
// //         navItems: [
// //             {href: '#', text: 'О нас', visible: 1},
// //             {href: '#', text: 'Каталог', visible: 1},
// //             {href: '#', text: 'Контакты', visible: 1}
// //         ]
// //     },
// //     methods: {
// //         revers: function () {
// //             this.countOrder++;
// //         },
// //         imgOver: function () {
// //             this.logoSrc = logoHoverIcon;
// //         },
// //         imgOut: function () {
// //             this.logoSrc = logoIcon;
// //         }
// //     }
// // });
//
// Vue.component('item', {
//     props: ['site'],
//     template: '' +
//     '<div class="blocks" :style="{ backgroundImage: \'url(\'+ site.src +\')\'}">' +
//     '   <a :href="site.url" class="siteItem">' +
//     '       <h3>{{site.title}}</h3>' +
//     '   </a>' +
//     '   <input type="submit" value="Открыть">' +
//     '</div>'
// })
//
// let siteBlock = new Vue({
//         el: "#siteBlock",
//         data: {
//             sites: [
//                 {id: 0, title: 'CardGame', url: 'other/CardGame/index.html', src: 'resource/CardGame.png'},
//                 {id: 1, title: 'Example', url: 'other/Example/index.html', src: 'resource/Example.png'},
//                 {id: 2, title: 'Honey', url: 'other/Honey/index.html', src: 'resource/Honey.png'},
//                 {id: 3, title: 'Honey_VUE', url: 'other/Honey_VUE/index.html', src: 'resource/Honey_VUE.png'},
//                 {id: 4, title: 'Horizontal', url: 'other/Horizontal/index.html', src: 'resource/Horizontal.png'},
//                 {id: 5, title: 'PSH', url: 'other/PSH/index.html', src: 'resource/PSH.png'},
//                 {id: 6, title: 'Resume', url: 'other/Resume/index.html', src: 'resource/Resume.png'},
//                 {id: 7, title: 'Tutorial', url: 'other/Tutorial/index.html', src: 'resource/Tutorial.png'}
//
//             ]
//         }
//     })
// ;
//
// window.onmousewheel = () => {
//     if (event.wheelDelta > 0) {//скроллим вверх
//         document.getElementById('glavVideo').classList.remove('invisible');
//     }
//     else if (event.wheelDelta < 0) {//скроллим вниз
//         document.getElementById('glavVideo').classList.add('invisible');
//     }
// }

// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// //
// // // Replace the 'ytplayer' element with an <iframe> and
// // // YouTube player after the API code downloads.
// // var player;
// // function onYouTubePlayerAPIReady() {
// //     player = new YT.Player('ifr', {
// //
// //         videoId: 'YOJsKatW-Ts'
// //     });
// // }
//
// let videoId= 'YOJsKatW-Ts';
// window.onYouTubeIframeAPIReady = function() {
//
//     player = new YT.Player('ifr', {
//         width: 1280,
//         height: 720,
//
//         playerVars: { 'autoplay': 0, 'controls': 1 },
//     });
//     player.playVideo(videoId);
// }
