menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 360px)').matches)
        menu.style.display = 'block';
}