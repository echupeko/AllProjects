menuBar = (id) => {
    const menu = document.getElementById('menu');
    if (window.matchMedia('(max-width: 360px)').matches) {
        if (id)
            menu.style.display = 'block';
        else
            menu.style.display = 'none';
    }
}