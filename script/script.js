let id = 1;
menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 360px)').matches) {
        if (id) {
            menu.style.display = 'block';
            id--;
        }
        else {
            menu.style.display = 'none';
            id++;
        }
    }
}