let id = 1;
menuBar = () => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 550px)').matches) {
        if (id) {
            menu.classList.add('active');
            id--;
        }
        else {
            menu.classList.toggle('active');
            id++;
        }
    }
}