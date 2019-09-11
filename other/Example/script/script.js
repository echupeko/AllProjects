let as;
window.onload = () => {
    as = document.getElementById('as');
    as.style.height = 2 * screen.height + 'px';
}
window.onmousemove = () => {
    as = document.getElementById('as');
    let y = -Math.round((event.clientX - screen.width / 2) / 270,2);
    let x = Math.round((event.clientY - screen.height / 2) / 90,2);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}
